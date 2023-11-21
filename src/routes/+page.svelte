<script lang="ts">
	import { Arrow, Body, Border, Button, CalculatorStore, Display } from '$lib/calculator';
	import { formatCurrency } from '$lib/util/format-currency';

	let percentage = '15';
	$: numPercentage = parseInt(percentage);
	$: numSub = $CalculatorStore ? parseFloat($CalculatorStore) : 0;
	$: displayTotal = formatCurrency(numSub);
	$: rightPercentage = formatCurrency(numSub * (numPercentage / 100));

	function handleNumbers(event: Event & { detail: string }) {
		const value = event.detail;
		let newValue = $CalculatorStore + value;
		if ($CalculatorStore.includes('.') && value === '.') {
			newValue = $CalculatorStore;
		}

		CalculatorStore.set(newValue);
	}

	function handleClr() {
		CalculatorStore.set('');
	}

	function handlePercentageUp() {
		if (numPercentage === 35) return;
		percentage = numPercentage + 5 + '';
	}

	function handlePercentageDown() {
		if (numPercentage === 10) return;
		percentage = numPercentage - 5 + '';
	}
</script>

<Border class="overflow-hidden bg-tan">
	<Display>
		<div class="pb-4 border-b border-tan-800 mb-4 flex items-center">
			<div class="grow text-left">
				<div class="inline-block rounded-full bg-tan-800 text-gray-600 text-xs px-4 py-2">TIP</div>
			</div>
			<div class="text-5xl">{rightPercentage}</div>
		</div>
		<div class="opacity-50">{displayTotal}</div>
	</Display>

	<Body>
		<Button on:click={handleNumbers} value="7" />
		<Button on:click={handleNumbers} value="8" />
		<Button on:click={handleNumbers} value="9" />

		<div class="span-4 grid grid-cols-1 gap-4">
			<Button
				disabled={numPercentage === 35}
				on:click={handlePercentageUp}
				class="bg-red-800 text-tan"
			>
				<Arrow class="w-5" />
			</Button>
			<Button value="{percentage}%" class="bg-red-800 text-tan" disabled />
			<Button
				disabled={numPercentage === 10}
				on:click={handlePercentageDown}
				class="bg-red-800 text-tan"
			>
				<Arrow class="w-5 rotate-180" />
			</Button>
		</div>

		<Button on:click={handleNumbers} value="4" />
		<Button on:click={handleNumbers} value="5" />
		<Button on:click={handleNumbers} value="6" />

		<Button on:click={handleNumbers} value="1" />
		<Button on:click={handleNumbers} value="2" />
		<Button on:click={handleNumbers} value="3" />

		<Button on:click={handleClr} value="CLR" class="bg-red-800 text-tan" />
		<Button on:click={handleNumbers} value="0" />
		<Button on:click={handleNumbers} value="." />
	</Body>
</Border>

<style>
	.span-4 {
		grid-row: span 4;
	}
</style>
