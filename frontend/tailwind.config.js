/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}'	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['air', 'sans-serif']

			},	
			// fontSize: {
			// 	sm: '1.2rem',
			// 	base: '1.4rem',
			// 	xl: '1.6rem',
			// 	'2xl': '1.8rem',
			// 	'3xl': '2rem',
			// 	'4xl': '2.441rem',
			// 	'5xl': '3.052rem',
			// }	
		}
	}
};
