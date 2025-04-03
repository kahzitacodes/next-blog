import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  safelist: [
    {
      pattern: /^grid-cols-/,
      variants: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
    },
    {
      pattern: /^gap-/,
      variants: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
    }
  ],
  theme: {
    extend: {
      colors: {
        primary: '#201f27',
        secondary: '#233038',
        link: '#EC656D'
      }
    }
  },
  plugins: []
}
export default config
