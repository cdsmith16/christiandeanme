import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mint: '#50C878',
        teal: '#0D7377',
        forest: '#1B5E20',
        amber: {
          DEFAULT: '#F5A623',
        },
        bloom: '#E8751A',
        azure: '#2B6CB0',
        surface: {
          light: '#F7FAF7',
          dark: '#0F0F0F',
          card: '#1E1E1E',
        },
        'gray-mid': '#5A5A5A',
        cream: '#F0EDE8',
        ink: '#1A1A1A',
      },
      fontFamily: {
        display: ['var(--font-raleway)', 'sans-serif'],
        body: ['var(--font-oxygen)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      boxShadow: {
        soft: '0 2px 8px rgba(0,0,0,0.06)',
        stickyBar: '0 4px 12px rgba(15,15,15,0.08)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 600ms ease-out both',
        'fade-in': 'fadeIn 400ms ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
