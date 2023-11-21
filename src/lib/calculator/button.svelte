<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import Border from './border.svelte';
	import Padding from './padding.svelte';

	let className = 'bg-blue text-tan';
	let button: HTMLDivElement;
	export let value = '';
	export let disabled = false;

	const dispatch = createEventDispatcher();

	$: isRed = className.includes('bg-red');
	$: insetClass = handleGetInsetClass({ isRed, disabled });

	function handleGetInsetClass(props: { isRed: boolean; disabled: boolean }) {
		const color = props.isRed ? 'red' : 'blue';
		let classes = `border-inset-up-${color}`;

		if (!disabled) {
			classes += ` active:border-inset-down-${color}`;
		}

		return classes;
	}

	function handleClick() {
		if (!disabled) dispatch('click', value);
	}

	onMount(() => {
		const action = (event: KeyboardEvent & { key: string }) => {
			if (event.key === value) handleClick();
		};

		window.addEventListener('keydown', action);

		return () => {
			window.removeEventListener('keydown', action);
		};
	});

	export { className as class };
</script>

<Border
	class="overflow-hidden flex items-stretch {className}"
	role="button"
	tabindex={0}
	on:click={handleClick}
	bind:element={button}
>
	<Padding
		class="{insetClass} w-full select-none cursor-pointer flex items-center justify-center text-xl md:text-4xl"
	>
		{value}
		<slot />
	</Padding>
</Border>

<div class="hidden border-inset-up-blue active:border-inset-down-blue" />
<div class="hidden border-inset-up-red active:border-inset-down-red" />
