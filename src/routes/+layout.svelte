<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';

	let { children } = $props();

	let visible = $state(false);
	onMount(() => {
		visible = true;
	});
</script>

<div class="flex min-h-[100dvh] w-full flex-col items-center justify-center">
	<main class="w-full max-w-screen-sm px-5 sm:px-3">
		{#if visible}
			{@render children()}
		{/if}
	</main>
</div>
