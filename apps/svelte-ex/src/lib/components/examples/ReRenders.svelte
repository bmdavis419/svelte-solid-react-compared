<script lang="ts">
	import RandomChild from './RandomChild.svelte';

	let count = $state(0);

	console.log('ReRendersExample rendered');
</script>

<div class="flex flex-col gap-4 items-start">
	<h2 class="text-lg font-bold">Current count: {count}</h2>
	<button class="bg-blue-500 text-white p-2 rounded-md" onclick={() => count++}> Increment </button>
	<RandomChild />
</div>
