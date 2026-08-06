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
          'linear-gradient(165deg, #F7F3EC 0%, #F3EEE6 55%, #EDE6DB 100%)',
      },
      animation: {
        marquee: 'marquee 48s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
