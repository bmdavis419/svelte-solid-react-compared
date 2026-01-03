<script lang="ts">
	let input = $state('');

	let randomDivRef: HTMLDivElement | undefined;

	const changeColor = () => {
		if (randomDivRef) {
			const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
			const randomColor = colors[Math.floor(Math.random() * colors.length)];
			randomDivRef.style.backgroundColor = randomColor;
		}
	};
</script>

<div class="flex flex-col gap-4 items-start">
	<div
		style="background-color: red; width: 100px; height: 100px;"
		{@attach (el) => {
			console.log('setting the ref');
			randomDivRef = el;
		}}
	></div>

	<button class="bg-blue-500 text-white p-2 rounded-md" onclick={changeColor}>
		Change Color
	</button>

	<div>
		<input
			class="bg-neutral-800 text-white p-2 rounded-md"
			placeholder="Type something"
			bind:value={input}
		/>
		<p class="text-sm text-neutral-400">You typed: {input}</p>
	</div>
</div>
