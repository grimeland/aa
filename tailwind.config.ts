import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#020810',
          DEFAULT: '#1E293B',
          light: '#4a6fa5',
        },
        accent: {
          dark: '#020810',
          DEFAULT: '#020810',
          light: '#4a6fa5',
        },
        neutral: {
          light: '#FDFBF7',
          DEFAULT: '#e8e3d5',
        },
      },
      fontFamily: {
        serif: ['var(--font-moderat)', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['var(--font-moderat)', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
