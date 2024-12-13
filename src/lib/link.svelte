<script lang="ts" module>
	export type LinkProps = {
		href: string;
		disabled?: boolean;
		title?: string;
		noPrepend?: boolean;
		children: Snippet;
	};
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fly } from 'svelte/transition';

	let { href, disabled = false, title, noPrepend = false, children }: LinkProps = $props();

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
		class="w-fit text-primary"
		class:transition-colors={!disabled}
		class:group-hover:text-primary-pale={!disabled}
		class:opacity-50={disabled}
	>
		{#if !noPrepend}
			{'> '}
		{/if}
		{@render children()}
	</span>
	{#if isHovered && title}
		<span
			in:fly={{ y: 10, duration: 200 }}
			out:fly={{ y: 10, duration: 200 }}
			class="pointer-events-none absolute bottom-full left-0 -translate-y-1 whitespace-nowrap rounded-md bg-foreground-200 bg-opacity-10 px-3 py-2 text-sm backdrop-blur-md"
		>
			{title}
		</span>
	{/if}
</a>
