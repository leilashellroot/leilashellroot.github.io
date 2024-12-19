<script lang="ts">
	import Link, { type LinkProps } from './link.svelte';
	import { typewriter } from './typewriter-transition';

	let { onintroendcapture }: { onintroendcapture: () => void } = $props();
	const linkData: (Omit<LinkProps, 'children'> & { label: string })[] = [
		{
			href: '/cv/frontend.pdf',
			label: 'CV'
		},
		{
			href: 'mailto:work@leila.sh',
			label: 'Email',
			title: 'work@leila.sh'
		},
		{
			href: 'https://gh.leila.sh/',
			label: 'GitHub',
			title: '@LeilaShellRoot'
		},
		{
			href: 'https://in.leila.sh/',
			label: 'LinkedIn',
			title: 'in/ilkhani'
		},
		{
			href: '/leila_ilkhani.vcf',
			label: 'VCard',
			isFile: true
		}
	];
	let currentIndex = $state(0);
</script>

<ul class="grid grid-cols-2 gap-6 sm:gap-4">
	{#each linkData as link, index (link.href)}
		{#if currentIndex >= index}
			<li>
				<Link {...link} noPrepend>
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
