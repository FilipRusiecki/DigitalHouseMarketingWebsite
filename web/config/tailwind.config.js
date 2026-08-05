/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dh-ink': '#07090D',
        'dh-surface': '#11151C',
        'dh-mist': '#C8D0D9',
        'dh-muted': '#7A8494',
        'dh-accent': '#5EEAD4',
        'dh-warm': '#E8DFD0',
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(ellipse 80% 60% at 70% 20%, rgba(94, 234, 212, 0.18), transparent 55%), radial-gradient(ellipse 50% 40% at 15% 80%, rgba(232, 223, 208, 0.08), transparent 50%)',
        'grid-fade':
          'linear-gradient(to bottom, rgba(7, 9, 13, 0.2), rgba(7, 9, 13, 0.95)), linear-gradient(rgba(94, 234, 212, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(94, 234, 212, 0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '56px 56px',
      },
    },
  },
  plugins: [],
}
