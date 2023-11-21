<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let className = '';
	export let role = '';
	export let tabindex = 0;
	export let square = false;
	export let top = false;
	export let element: HTMLDivElement | undefined = undefined;

	export { className as class };
</script>

<div
	bind:this={element}
	on:click
	on:keypress={() => dispatch('click')}
	{role}
	{...{ tabindex }}
	class="border-blue-900 {className}"
	class:border-t-12={top}
	class:border-12={!top}
	class:rounded-2xl={!square}
>
	<slot />
</div>
