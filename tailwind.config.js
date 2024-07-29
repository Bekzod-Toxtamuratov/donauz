/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,vue}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '120px',
			},
		},
		extend: {
			colors: {
				black1: '#250615',
				purple: '#FFFDF6',
				orange: '#F77F00',
				primary: '#F77F00',
			},
		},
	},
	plugins: [],
}
