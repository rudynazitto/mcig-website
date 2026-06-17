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
        primary: '#535e50',
        'primary-container': '#6b7768',
        secondary: '#a14005',
        surface: '#fbf9f6',
        'surface-cream': '#F7F7F5',
        'surface-warm-gray': '#E8E6E0',
        'on-surface': '#1b1c1a',
        'on-surface-variant': '#444842',
        outline: '#747872',
        'outline-variant': '#c4c8c0',
        terracotta: '#C95B2A',
        'terracotta-btn': '#E8743B',
        sage: '#535e50',
        'sage-container': '#6b7768',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
}
export default config
