import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      primary: {
        1: '#5BB8F1',
        2: '#4F80EF',
        3: '#60AEF0',
      },
      neutral: {
        1: '#9E9E9E',
      },
    },
  },
  plugins: [],
}
export default config
