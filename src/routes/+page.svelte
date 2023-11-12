<script lang="ts">
	import Field from '$lib/field.svelte';
	import Range from '$lib/range.svelte';
	import { formatCurrency } from '$lib/util/format-currency';

	let percentage = '15';
	let subtotal = '0';
	$: numPercentage = parseInt(percentage);
	$: numSub = subtotal ? parseInt(subtotal) : 0;
	$: rightPercentage = formatCurrency(numSub * (numPercentage / 100));
</script>

<form on:submit|preventDefault>
	<Field label="Subtotal" type="number" bind:value={subtotal} />
	<Range min={10} max={35} step={5} label="Tip Percentage" class="py-8" bind:value={percentage} />
</form>

<div class="text-7xl text-center">{rightPercentage}</div>
