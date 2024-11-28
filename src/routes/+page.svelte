<script>
	export const prerender = true;
	import Link from '$lib/link.svelte';
	import { typewriter } from '$lib/typewriter-transition';
	import { fade } from 'svelte/transition';
</script>

<section class="flex flex-col gap-2">
	<h1 class="flex gap-1 text-4xl font-bold">
		<span in:typewriter={{ speed: 3, includeCursor: false }}>Leila Ilkhani</span>
		<span class="-translate-y-0.5 animate-pulse text-white">_</span>
	</h1>
	<h2 class="text-2xl text-neutral-400" in:fade={{ delay: 400 }}>Frontend Engineer</h2>
</section>
<section class="grid grid-cols-1 gap-4 sm:grid-cols-2" in:fade={{ delay: 600 }}>
	<Link
		label="CV"
		href="https://github.com/clonomaer/public-cv-v2/releases/download/v1.0.0/frontend.pdf"
	/>
	<Link label="Email" href="mailto:work@leilynn.link" title="work@leilynn.link" />
	<Link label="GitHub" href="https://github.com/clonomaer" title="@clonomaer" />
	<Link label="Telegram" href="https://t.me/clei420" title="@clei420" />
	<Link
		label="LinkedIn"
		href="https://linkedin.com/in/ilkhani"
		disabled
		title="Disabled for privacy concerns"
	/>
</section>
