<script lang="ts">
	import { fly } from 'svelte/transition';

	let {
		href,
		label,
		disabled = false,
		title
	}: { href: string; label: string; disabled?: boolean; title?: string } = $props();

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
		class="w-fit text-purple-400"
		class:transition-colors={!disabled}
		class:group-hover:text-purple-300={!disabled}
		class:opacity-50={disabled}
	>
		{'> '}{label}
	</span>
	{#if isHovered && title}
		<span
			in:fly={{ y: 10, duration: 300 }}
			out:fly={{ y: 10, duration: 200 }}
			class="pointer-events-none absolute bottom-full left-0 -translate-y-1 whitespace-nowrap rounded-md bg-neutral-500 bg-opacity-10 px-3 py-2 text-sm backdrop-blur-md"
		>
			{title}
		</span>
	{/if}
</a>
