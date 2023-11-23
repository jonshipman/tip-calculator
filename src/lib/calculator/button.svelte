<script lang="ts">
	import { getBorder, paddingClasses } from '$lib/config';
	import { createEventDispatcher, onMount } from 'svelte';

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

<div
	class="{getBorder()} overflow-hidden flex items-stretch {className}"
	role="button"
	tabindex={0}
	on:click={handleClick}
	on:keydown={handleClick}
	bind:this={button}
>
	<div
		class="inner {insetClass} {paddingClasses} rounded-2xl w-full select-none cursor-pointer flex items-center justify-center text-sm sm:text-xl md:text-4xl"
	>
		{value}
		<slot />
	</div>
</div>

<style lang="postcss">
	.inner {
		outline: 2px solid theme('colors.blue.900');
	}

	@screen lg {
		.inner {
			outline: 12px solid theme('colors.blue.900');
		}
	}
</style>
