<script>
	import Padding from './padding.svelte';
	import Border from './border.svelte';
</script>

<Padding class="bg-blue">
	<Border class="bg-tan">
		<Padding class="text-right">
			<slot />
		</Padding>
	</Border>
</Padding>
