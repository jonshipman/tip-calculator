/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Changa', 'system-ui', 'sans-serif']
			},
			colors: {
				purple: { DEFAULT: '#BD4BAF', light: '#FC26E3', dark: '#5C3C58' },
				green: { DEFAULT: '#5FFC26', dark: '#4D6943' },
				tan: { 800: '#EBDFCD', DEFAULT: '#fef1de' },
				blue: { 900: '#001a3f', 800: '#224762', DEFAULT: '#4d7083', 100: '#cbd6d8' }
			},
			borderWidth: {
				12: '12px'
			},
			minWidth: {
				360: '360px'
			}
		}
	},
	plugins: []
};
