/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        kitty: {
          50: '#fff7fb', 100: '#fff0f6', 200: '#ffd6e7', 300: '#ffb6d3', 400: '#ff9bc2',
          500: '#ff6fa5', 600: '#ec5590', 700: '#c93a78', ink: '#6b2a47', muted: '#b07a93',
        },
      },
      fontFamily: {
        display: ['var(--font-fredoka)', 'ui-rounded', 'sans-serif'],
        body: ['var(--font-quicksand)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 14px 40px rgba(255,111,165,.18)',
        pop: '0 10px 0 rgba(236,85,144,.25)',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0) rotate(var(--r,0deg))' }, '50%': { transform: 'translateY(-14px) rotate(var(--r,0deg))' } },
        wiggle: { '0%,100%': { transform: 'rotate(-6deg)' }, '50%': { transform: 'rotate(6deg)' } },
      },
      animation: { float: 'float 5s ease-in-out infinite', wiggle: 'wiggle 2.4s ease-in-out infinite' },
    },
  },
  plugins: [],
};
