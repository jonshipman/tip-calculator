<script lang="ts">
	export let label: string;
	let className = 'contents';
	export let value: string = '5';
	export let min: number;
	export let max: number;
	export let step: number;

	const id = (Math.random() * 10e15).toString(16);

	export { className as class };
</script>

<div class={className}>
	<div>
		<label for={id}>
			{label}
		</label>
	</div>
	<div>
		<input
			{id}
			bind:value
			type="range"
			{...{ min, max, step }}
			class="w-full h-3 dark:bg-green-dark bg-white appearance-none cursor-pointer rounded-lg"
		/>
	</div>
	<div>{value}%</div>
</div>
