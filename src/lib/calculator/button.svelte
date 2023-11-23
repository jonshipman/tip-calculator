<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	let className = 'bg-blue text-tan';
	let button: HTMLDivElement;
	export let value = '';
	export let disabled = false;

	const dispatch = createEventDispatcher();

	$: isRed = className.includes('bg-red');

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
	class="border-blue-900 lg:border-12 border-4 rounded-2xl overflow-hidden flex items-stretch {className}"
	role="button"
	tabindex={0}
	on:click={handleClick}
	on:keydown={handleClick}
	bind:this={button}
>
	<div
		class:border-inset-up-red={isRed}
		class:border-inset-up-blue={!isRed}
		class:active:border-inset-down-red={isRed && !disabled}
		class:active:border-inset-down-blue={!isRed && !disabled}
		class="inner py-1 px-2 sm:py-2 sm:px-4 md:py-4 md:px-8 rounded-2xl w-full select-none cursor-pointer flex items-center justify-center text-sm sm:text-xl md:text-4xl"
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

	div {
		-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
		-webkit-focus-ring-color: rgba(255, 255, 255, 0);
	}
</style>
