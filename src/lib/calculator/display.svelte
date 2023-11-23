<script>
	import { getBorder, paddingClasses } from '$lib/config';
	</script>

<div class="{paddingClasses} bg-blue">
	<div class="{getBorder()} bg-tan">
		<div class="{paddingClasses} text-right">
			<slot />
		</div>
	</div>
</div>
