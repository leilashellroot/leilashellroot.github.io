<script>
	import Link from './link.svelte';
</script>

<ul class="grid grid-cols-2 gap-6 sm:gap-4">
	<li>
		<Link href="https://leilynn.link/cv/frontend.pdf">CV</Link>
	</li>
	<li>
		<Link href="mailto:work@leilynn.link" title="work@leilynn.link">Email</Link>
	</li>
	<li>
		<Link href="https://github.com/clonomaer" title="@clonomaer">GitHub</Link>
	</li>
	<li>
		<Link href="https://t.me/clei420" title="@clei420">Telegram</Link>
	</li>
	<li>
		<Link href="https://linkedin.com/in/ilkhani" disabled title="Disabled for privacy concerns">
			LinkedIn
		</Link>
	</li>
</ul>
