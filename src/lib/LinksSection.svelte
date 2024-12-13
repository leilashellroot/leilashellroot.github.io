<script lang="ts">
	import Link from './link.svelte';
	import { typewriter } from './typewriter-transition';

	let { onintroendcapture }: { onintroendcapture: () => void } = $props();
	const linkData = [
		{ href: 'https://leila.sh/cv/frontend.pdf', label: 'CV' },
		{ 
			href: 'mailto:work@leila.sh',
			label: 'Email',
			title: 'work@leila.sh'
		},
		{ 
			href: 'https://github.com/leilashellroot',
			label: 'GitHub',
			title: '@LeilaShellRoot'
		},
		{ 
			href: 'https://t.me/leilashellroot',
			label: 'Telegram',
			title: '@LeilaShellRoot'
		},
		{
			href: 'https://linkedin.com/in/ilkhani',
			label: 'LinkedIn',
			title: 'in/ilkhani'
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
							speed: 4
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
