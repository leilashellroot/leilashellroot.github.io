<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fly } from 'svelte/transition';

	let {
		href,
		disabled = false,
		title,
		children
	}: { href: string; disabled?: boolean; title?: string; children: Snippet } = $props();

	let isHovered = $state(false);
</script>

<a
	class="group w-fit"
	{href}
	class:relative={title}
	class:cursor-not-allowed={disabled}
	onpointerenter={() => (isHovered = true)}
	onpointerleave={() => (isHovered = false)}
	target="_blank"
	aria-disabled={disabled}
	onclick={disabled ? (e) => e.preventDefault() : undefined}
>
	<span
		class="text-primary w-fit"
		class:transition-colors={!disabled}
		class:group-hover:text-primary-pale={!disabled}
		class:opacity-50={disabled}
	>
		{'> '}{@render children()}
	</span>
	{#if isHovered && title}
		<span
			in:fly={{ y: 10, duration: 200 }}
			out:fly={{ y: 10, duration: 200 }}
			class="bg-foreground-200 pointer-events-none absolute bottom-full left-0 -translate-y-1 whitespace-nowrap rounded-md bg-opacity-10 px-3 py-2 text-sm backdrop-blur-md"
		>
			{title}
		</span>
	{/if}
</a>
