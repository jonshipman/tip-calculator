export default {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Changa', 'system-ui', 'sans-serif']
			},
			colors: {
				purple: { DEFAULT: '#BD4BAF', light: '#FC26E3', dark: '#5C3C58' },
				green: { DEFAULT: '#5FFC26', dark: '#4D6943' }
			}
		}
	},
	plugins: []
};
