/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        brand: {
          green: '#2F5233',
          sage: '#94A89A',
          sand: '#F7F5F0',
          gold: '#D4AF37',
        }
      }
    }
  },
  plugins: []
}
