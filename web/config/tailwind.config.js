/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dh-cream': '#F3EEE6',
        'dh-cream-deep': '#E8E0D4',
        'dh-navy': '#0C2340',
        'dh-navy-soft': '#1A3A5C',
        'dh-blue': '#3D6B9A',
        'dh-muted': '#6E655C',
        'dh-line': '#D4CBBE',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-cream':
          'radial-gradient(ellipse 80% 60% at 90% 0%, rgba(61, 107, 154, 0.12), transparent 55%), radial-gradient(ellipse 50% 40% at 0% 80%, rgba(12, 35, 64, 0.06), transparent 50%), linear-gradient(165deg, #F7F3EC 0%, #F3EEE6 45%, #EDE6DB 100%)',
      },
      animation: {
        'drift-slow': 'drift 18s ease-in-out infinite',
        'drift-slower': 'drift-alt 24s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 8s ease-in-out infinite',
        marquee: 'marquee 42s linear infinite',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-24px, 18px)' },
        },
        'drift-alt': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(20px, -16px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.04)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
