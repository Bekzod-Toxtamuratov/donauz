/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,vue}'],
	theme: {
		// screens: {
		// 	tablet: '640px',
		// 	// => @media (min-width: 640px) { ... }
		// 	laptop: '1024px',
		// 	// => @media (min-width: 1024px) { ... }
		// 	desktop: '1280px',
		// 	// => @media (min-width: 1280px) { ... }
		// },
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
				titleColor: '#250615',
				purple: '#FFFDF6',
				orange: '#F77F00',
				primary: '#F77F00',
			},
		},
	},
	plugins: [],
}
