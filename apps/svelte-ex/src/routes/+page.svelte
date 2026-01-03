<script lang="ts">
	import SvelteLogo from '$lib/components/SvelteLogo.svelte';
	import ReRendersExample from '$lib/components/examples/ReRenders.svelte';
	import SlowDerived from '$lib/components/examples/SlowDerived.svelte';
	import UsingTheDom from '$lib/components/examples/UsingTheDom.svelte';

	type ExampleType = 'rerenders' | 'slowDerived' | 'usingTheDom';

	let selectedExample = $state<ExampleType>('rerenders');
</script>

<div
	class="w-full h-screen bg-neutral-900 text-white border-2 border-[#FF3E00] flex flex-col gap-8 p-12"
>
	<header class="flex flex-row items-center justify-start gap-4">
		<SvelteLogo class="size-24" />
		<h2 class="text-2xl font-bold">Svelte Example</h2>
	</header>

	<div class="flex flex-row gap-2">
		<button
			class="px-4 py-2 rounded-md {selectedExample === 'rerenders'
				? 'bg-blue-500 text-white'
				: 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'}"
			onclick={() => (selectedExample = 'rerenders')}
		>
			ReRenders
		</button>
		<button
			class="px-4 py-2 rounded-md {selectedExample === 'slowDerived'
				? 'bg-blue-500 text-white'
				: 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'}"
			onclick={() => (selectedExample = 'slowDerived')}
		>
			SlowDerived
		</button>
		<button
			class="px-4 py-2 rounded-md {selectedExample === 'usingTheDom'
				? 'bg-blue-500 text-white'
				: 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'}"
			onclick={() => (selectedExample = 'usingTheDom')}
		>
			UsingTheDom
		</button>
	</div>

	<div>
		{#if selectedExample === 'rerenders'}
			<ReRendersExample />
		{/if}
		{#if selectedExample === 'slowDerived'}
			<SlowDerived />
		{/if}
		{#if selectedExample === 'usingTheDom'}
			<UsingTheDom />
		{/if}
	</div>
</div>
