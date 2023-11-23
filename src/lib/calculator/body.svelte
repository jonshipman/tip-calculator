<script>
	import { getBorder, paddingClasses } from '$lib/config';
	</script>

<div class="{getBorder(true, true)} {paddingClasses} grid grid-cols-4 gap-4 justify-center">
	<slot />
</div>
