/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
  },
  async headers() {
    return [
      {
        source: '/ChristianDean.pkpass',
        headers: [
          { key: 'Content-Type', value: 'application/vnd.apple.pkpass' },
          { key: 'Content-Disposition', value: 'attachment; filename="ChristianDean.pkpass"' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
