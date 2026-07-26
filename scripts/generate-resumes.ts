/**
 * Pre-generates resume PDFs for every persona combination (2^5 = 32 files,
 * including the unfiltered full resume) into public/resumes/. Runs as the
 * `prebuild` npm script so the PDFs always reflect the data in lib/.
 */
import PDFDocument from 'pdfkit';
import { createWriteStream, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { experience } from '../lib/experience';
import { education } from '../lib/education';
import { skills } from '../lib/skills';
import { personas } from '../lib/personas';
import { resumeSlug } from '../lib/resume';
import type { PersonaId } from '../lib/types';

const OUT_DIR = join(process.cwd(), 'public', 'resumes');

// Standard PDF fonts use WinAnsi encoding, which lacks arrows and similar glyphs.
const sanitize = (s: string) => s.replace(/\s*→\s*/g, ' to ');

const MASTER_PROFILE =
  'Technical leader with 12+ years building at the intersection of product, engineering, and business strategy: from shipping Windows 8.1 at Microsoft to $6B deal platforms at AWS to founding an AI product studio. Stanford-trained in Human-Computer Interaction; Emory MBA with full Consortium fellowship; AWS Certified Solutions Architect.';

const INK = '#1A1A1A';
const FOREST = '#1B5E20';
const TEAL = '#0D7377';
const GRAY = '#5A5A5A';

function buildPdf(selected: PersonaId[]): Promise<void> {
  const slug = resumeSlug(selected);
  const lensLabels = personas
    .filter((p) => selected.includes(p.id))
    .map((p) => p.label);

  const doc = new PDFDocument({
    size: 'LETTER',
    margins: { top: 54, bottom: 54, left: 58, right: 58 },
    info: {
      Title: `Christian D. Smith Resume${lensLabels.length ? ` (${lensLabels.join(', ')})` : ''}`,
      Author: 'Christian D. Smith',
    },
  });

  const done = new Promise<void>((resolve, reject) => {
    const stream = createWriteStream(join(OUT_DIR, `${slug}.pdf`));
    stream.on('finish', () => resolve());
    stream.on('error', reject);
    doc.pipe(stream);
  });

  const width = doc.page.width - doc.page.margins.left - doc.page.margins.right;

  // Header
  doc.font('Helvetica-Bold').fontSize(22).fillColor(INK).text('Christian D. Smith, M.B.A.');
  doc.moveDown(0.15);
  doc.font('Helvetica').fontSize(11).fillColor(TEAL).text('Product Engineer | Strategy');
  doc.moveDown(0.2);
  doc
    .fontSize(9)
    .fillColor(GRAY)
    .text(
      'christian@christiandsmith.com  ·  (973) 634-0422  ·  New York | New Jersey  ·  christiandsmith.com  ·  linkedin.com/in/cdsmith1990'
    );

  if (lensLabels.length > 0) {
    doc.moveDown(0.3);
    doc
      .fontSize(8.5)
      .fillColor(GRAY)
      .text(`Tailored view: ${lensLabels.join('  ·  ')}`, { oblique: true });
  }

  // Profile: the persona's positioning statement when one lens is selected,
  // otherwise the master profile.
  const profile =
    selected.length === 1
      ? personas.find((p) => p.id === selected[0])!.narrative
      : MASTER_PROFILE;
  doc.moveDown(0.5);
  doc.font('Helvetica').fontSize(9.5).fillColor(INK).text(sanitize(profile), { lineGap: 1.5 });

  const rule = () => {
    doc.moveDown(0.5);
    doc
      .moveTo(doc.page.margins.left, doc.y)
      .lineTo(doc.page.margins.left + width, doc.y)
      .lineWidth(0.75)
      .strokeColor(TEAL)
      .stroke();
    doc.moveDown(0.5);
  };

  const sectionHeading = (label: string) => {
    doc.font('Helvetica-Bold').fontSize(12).fillColor(FOREST).text(label.toUpperCase(), {
      characterSpacing: 1.5,
    });
    doc.moveDown(0.4);
  };

  // Experience
  rule();
  sectionHeading('Experience');

  for (const job of experience) {
    const bullets =
      selected.length === 0
        ? job.bullets
        : job.bullets.filter((b) => b.personas.some((p) => selected.includes(p)));
    if (bullets.length === 0) continue;

    if (doc.y > doc.page.height - 160) doc.addPage();

    doc.font('Helvetica-Bold').fontSize(11).fillColor(INK).text(job.company, { continued: true });
    doc
      .font('Helvetica')
      .fontSize(9)
      .fillColor(GRAY)
      .text(
        `   ${job.startDate === job.endDate ? job.startDate : `${job.startDate} — ${job.endDate}`}`
      );
    doc
      .font('Helvetica')
      .fontSize(9.5)
      .fillColor(INK)
      .text(sanitize(`${job.role}  ·  ${job.location}`));
    if (job.summary) {
      doc
        .font('Helvetica-Oblique')
        .fontSize(8.5)
        .fillColor(GRAY)
        .text(sanitize(job.summary));
    }
    doc.moveDown(0.25);

    for (const b of bullets) {
      const linkSuffix = b.links?.length ? `  (${b.links.map((l) => l.url).join(', ')})` : '';
      doc
        .font('Helvetica')
        .fontSize(9.5)
        .fillColor(INK)
        .text(sanitize(`•  ${b.text}${linkSuffix}`), { indent: 10, lineGap: 1.5 });
    }
    doc.moveDown(0.6);
  }

  // Education
  if (doc.y > doc.page.height - 200) doc.addPage();
  rule();
  sectionHeading('Education');
  for (const e of education) {
    doc.font('Helvetica-Bold').fontSize(10.5).fillColor(INK).text(e.institution, { continued: true });
    doc.font('Helvetica').fontSize(9).fillColor(GRAY).text(`   ${e.year}`);
    doc.font('Helvetica').fontSize(9.5).fillColor(INK).text(`${e.degree}, ${e.field}`);
    for (const h of e.highlights) {
      doc.fontSize(9).fillColor(GRAY).text(`•  ${h}`, { indent: 10, lineGap: 1 });
    }
    doc.moveDown(0.5);
  }

  // Skills
  if (doc.y > doc.page.height - 160) doc.addPage();
  rule();
  sectionHeading('Skills & Tools');
  for (const group of skills) {
    doc.font('Helvetica-Bold').fontSize(9).fillColor(INK).text(`${group.name}:  `, {
      continued: true,
    });
    doc.font('Helvetica').fontSize(9).fillColor(GRAY).text(group.skills.join(', '), {
      lineGap: 1,
    });
    doc.moveDown(0.2);
  }

  doc.end();
  return done;
}

function* combinations(ids: PersonaId[]): Generator<PersonaId[]> {
  const n = ids.length;
  for (let mask = 0; mask < 1 << n; mask++) {
    yield ids.filter((_, i) => mask & (1 << i));
  }
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const ids = personas.map((p) => p.id);
  let count = 0;
  for (const combo of combinations(ids)) {
    await buildPdf(combo);
    count++;
  }
  console.log(`Generated ${count} resume PDFs in public/resumes/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
