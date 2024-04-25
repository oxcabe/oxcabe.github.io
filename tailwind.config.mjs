/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			mono: ['Fira Code', 'monospace'],
      sans: ['Fira Sans', 'sans'],
      serif: ['Bitter', 'serif']
		},
		extend: {},
	},
	plugins: [],
}
