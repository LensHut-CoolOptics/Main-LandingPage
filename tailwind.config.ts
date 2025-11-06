import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { brand: { DEFAULT: '#0ea5e9', dark: '#0369a1', light: '#38bdf8' } },
      boxShadow: { soft: '0 10px 30px rgba(2, 6, 23, 0.08)' }
    },
  },
  plugins: [],
}
export default config
