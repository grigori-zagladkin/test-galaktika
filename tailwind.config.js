/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				bgColor: '#F7F7FD',
				accent: '#5F43D0',
				secondaryColor: '#C8CDFF',
				subColor: '#0E0042',
				dark: '#1D1D1D',
				gray: '#80878F',
			},
		},
	},
	plugins: [],
}
