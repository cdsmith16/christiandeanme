import { NextResponse } from 'next/server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LeadPayload = {
  email?: string;
  name?: string;
  personas?: string[];
  resumeSlug?: string;
  company?: string; // honeypot
};

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body' }, { status: 400 });
  }

  // Honeypot: bots that fill every field get a fake success, no Airtable write.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const email = body.email?.trim();
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: 'A valid email is required' }, { status: 400 });
  }

  if (process.env.NODE_ENV === 'production') {
    const origin = request.headers.get('origin');
    const requestHost = new URL(request.url).host;
    if (origin && new URL(origin).host !== requestHost) {
      return NextResponse.json({ ok: false, error: 'Invalid origin' }, { status: 403 });
    }
  }

  const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME } = process.env;
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_NAME) {
    console.error('Airtable env vars are not configured');
    return NextResponse.json({ ok: false, error: 'Lead storage is not configured' }, { status: 500 });
  }

  try {
    const airtableRes = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            Email: email,
            Name: body.name?.trim() || '',
            Personas: body.personas?.join(', ') || '',
            'Resume Slug': body.resumeSlug || '',
            Source: 'resume_download',
          },
        }),
      }
    );

    if (!airtableRes.ok) {
      console.error('Airtable write failed', airtableRes.status, await airtableRes.text());
      return NextResponse.json({ ok: false, error: 'Failed to save lead' }, { status: 502 });
    }
  } catch (err) {
    console.error('Airtable request error', err);
    return NextResponse.json({ ok: false, error: 'Failed to save lead' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
