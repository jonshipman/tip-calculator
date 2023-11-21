<script>
	import Border from './border.svelte';
	import Padding from './padding.svelte';
</script>

<Border top square>
	<Padding class="grid grid-cols-4 gap-4 justify-center">
		<slot />
	</Padding>
</Border>
