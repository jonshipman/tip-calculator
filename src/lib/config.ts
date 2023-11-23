export const paddingClasses = 'py-1 px-2 sm:py-2 sm:px-4 md:py-4 md:px-8';

export function getBorder(top = false, square = false): string {
	let classes = 'border-blue-900';

	if (top) {
		classes += ' lg:border-t-12 border-t-4';
	} else {
		classes += ' lg:border-12 border-4';
	}

	if (!square) classes += ' rounded-2xl';

	return classes;
}
