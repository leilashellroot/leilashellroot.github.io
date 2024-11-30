<script lang="ts">
	import Link from './link.svelte';
	import { typewriter } from './typewriter-transition';

	let { onintroendcapture }: { onintroendcapture: () => void } = $props();
	const linkData = [
		{ href: 'https://leilynn.link/cv/frontend.pdf', label: 'CV' },
		{ href: 'mailto:work@leilynn.link', label: 'Email' },
		{ href: 'https://github.com/clonomaer', label: 'GitHub' },
		{ href: 'https://t.me/clei420', label: 'Telegram' },
		{
			href: 'https://linkedin.com/in/ilkhani',
			label: 'LinkedIn',
			disabled: true,
			title: 'Disabled for privacy concerns'
		}
	];
	let currentIndex = $state(0);
</script>

<ul class="grid grid-cols-2 gap-6 sm:gap-4">
	{#each linkData as link, index (link.href)}
		{#if currentIndex >= index}
			<li>
				<Link href={link.href} title={link.title} disabled={link.disabled} noPrepend>
					<span
						in:typewriter|global={{
							speed: 5
						}}
						onintroendcapture={() => {
							currentIndex++;
							if (index === linkData.length - 1) {
								onintroendcapture();
							}
						}}
					>
						{'> '}{link.label}
					</span>
				</Link>
			</li>
		{/if}
	{/each}
</ul>
