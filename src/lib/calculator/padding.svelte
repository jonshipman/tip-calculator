<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let className = '';
	export let role = '';
	export let tabindex = 0;

	export { className as class };
</script>

<div
	class="py-2 px-4 md:py-4 md:px-8 {className}"
	on:click
	on:keypress={() => dispatch('click')}
	{role}
	{...{ tabindex }}
>
	<slot />
</div>
