<script lang="ts">
	let className = 'contents';
	export let label: string;
	export let required = false;
	export let value = '0';
	export let type = 'text';

	const id = (Math.random() * 10e15).toString(16);

	export { className as class };
</script>

<div class={className}>
	<div>
		<label for={id}>
			{label}
			{#if required}<span class="text-green-light">*</span>{/if}
		</label>
	</div>
	<div>
		<input
			class="p-4 rounded-md w-full block text-purple-dark dark:text-green dark:bg-green-dark appearance-none"
			{...{ id, type, required }}
			bind:value
		/>
	</div>
</div>
