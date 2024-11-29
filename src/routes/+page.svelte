<script lang="ts">
	import Link from '$lib/link.svelte';
	import { typewriter } from '$lib/typewriter-transition';
	import { fade } from 'svelte/transition';

	const nameContent = 'Leila Ilkhani';
	const descriptionContent = `Frontend Engineer with a systems thinker's soul.
		My journey from backend to frontend development empowers me to craft elegant web solutions that
			delight users while empowering developers.
		I specialize in building maintainable architectures that turn complex challenges into seamless
		experiences.`;

	const Steps = {
		Name: 0,
		Title: 1,
		Description: 2,
		Links: 3
	} as const;

	const stepDurations = {
		[Steps.Name]: 300,
		[Steps.Title]: 200,
		[Steps.Description]: 800,
		[Steps.Links]: 300
	};

	let currentStep = Steps.Name;

	function getDelay(step: number) {
		return Object.values(stepDurations)
			.slice(0, step)
			.reduce((acc, curr) => acc + curr, 0);
	}
</script>

<div class="mx-auto flex w-full max-w-md flex-col gap-8">
	<section class="flex flex-col gap-4">
		<div class="flex flex-col gap-1">
			<h1 class="flex gap-1 text-4xl font-bold">
				<span
					in:typewriter={{
						delay: getDelay(Steps.Name),
						duration: stepDurations[Steps.Name],
						speed: 3,
						hideCursor: true
					}}
				>
					Leila Ilkhani
				</span>
				<span class="w-0 -translate-y-0.5 animate-pulse text-white">_</span>
			</h1>
			<h2
				class="text-2xl text-neutral-400"
				in:typewriter={{
					delay: getDelay(Steps.Title),
					duration: stepDurations[Steps.Title]
				}}
			>
				Frontend Engineer
			</h2>
		</div>
		<p
			class="whitespace-pre-line text-justify text-sm"
			in:typewriter={{
				delay: getDelay(Steps.Description),
				duration: stepDurations[Steps.Description]
			}}
		>
			{descriptionContent}
		</p>
	</section>
	<section
		class="grid grid-cols-1 gap-4 sm:grid-cols-2"
		in:fade={{
			delay: getDelay(Steps.Links),
			duration: stepDurations[Steps.Links]
		}}
	>
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
</div>
