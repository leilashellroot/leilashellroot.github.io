<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';

	let { children } = $props();

	let visible = $state(false);
	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, 700);
	});
</script>

<div class="flex min-h-screen w-full flex-col items-center justify-center">
	<main class="flex w-96 max-w-screen-sm flex-col gap-12 px-3">
		{#if visible}
			{@render children()}
		{:else}
			<h1 class="-space-x-5 text-center text-5xl font-bold text-white">
				<span class="animate-pulse animate-duration-700">.</span>
				<span class="animate-pulse animate-delay-100 animate-duration-700">.</span>
				<span class="animate-pulse animate-delay-200 animate-duration-700">.</span>
			</h1>
		{/if}
	</main>
</div>
