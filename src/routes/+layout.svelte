<script lang="ts">
	import './layout.css';
	import bg from './bg.jpg';
</script>

<div
	style="--bg: url('{bg}')"
	class="wrapper-light dark:wrapper-dark bg-cover p-4 dark:text-tan h-screen overflow-x-auto overflow-y-hidden flex items-center"
>
	<div class="w-full overflow-y-auto max-h-screen">
		<slot />
	</div>
</div>

<div class="hidden wrapper-dark" />

<style lang="postcss">
	@tailwind components;

	@layer components {
		.wrapper-light {
			background-image: linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)),
				var(--bg);
		}

		.wrapper-dark {
			background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), var(--bg);
		}
	}
</style>
