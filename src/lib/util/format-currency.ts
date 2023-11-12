import { browser } from '$app/environment';

export function formatCurrency(number: number, currency = 'USD') {
	return new Intl.NumberFormat(getNavigatorLanguage(), { style: 'currency', currency }).format(
		number
	);
}

function getNavigatorLanguage() {
	if (!browser) return 'en-US';
	if (navigator.languages && navigator.languages.length) {
		return navigator.languages[0];
	} else {
		return navigator.language || 'en-US';
	}
}
