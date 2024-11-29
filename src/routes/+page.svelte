<script lang="ts">
	import LinksSection from '$lib/LinksSection.svelte';
	import { typewriter } from '$lib/typewriter-transition';
	import { fade } from 'svelte/transition';

	const nameContent = 'Leila Ilkhani';
	const descriptionContent = `A systems thinker at heart,
	my journey from backend roots empowers me to craft elegant web solutions that delight users while empowering developers.
	I specialize in building maintainable architectures that turn complex challenges into seamless experiences.`;
	const footerContent = `Where clean code meets clear communication`;

	const Steps = {
		Name: 0,
		Title: 1,
		Description: 2,
		Links: 3,
		Footer: 4
	} as const;

	const stepDurations = {
		[Steps.Name]: 300,
		[Steps.Title]: 200,
		[Steps.Description]: 800,
		[Steps.Links]: 300,
		[Steps.Footer]: 200
	};

	let currentStep = Steps.Name;

	function getDelay(step: number) {
		return Object.values(stepDurations)
			.slice(0, step)
			.reduce((acc, curr) => acc + curr, 0);
	}
</script>

<div class="mx-auto flex w-full max-w-md flex-col gap-8 py-8">
	<section class="flex flex-col gap-4">
		<div class="flex flex-col gap-1">
			<h1
				in:typewriter={{
					delay: getDelay(Steps.Name),
					duration: stepDurations[Steps.Name],
					speed: 3
				}}
				class="text-4xl font-bold"
			>
				Leila Ilkhani
			</h1>
			<h2
				class="text-foreground-400 text-2xl"
				in:typewriter={{
					delay: getDelay(Steps.Title),
					duration: stepDurations[Steps.Title]
				}}
			>
				Frontend Engineer
			</h2>
		</div>
		<p
			class="whitespace-pre-line text-sm"
			in:typewriter={{
				delay: getDelay(Steps.Description),
				duration: stepDurations[Steps.Description]
			}}
		>
			{descriptionContent}
		</p>
	</section>
	<section
		in:fade={{
			delay: getDelay(Steps.Links),
			duration: stepDurations[Steps.Links]
		}}
	>
		<LinksSection />
	</section>
	<footer
		class="text-sm"
		in:typewriter={{
			delay: getDelay(Steps.Footer),
			duration: stepDurations[Steps.Footer],
			hideCursor: true
		}}
	>
		{footerContent}
		<span class="-ml-1 -translate-y-px animate-pulse animate-duration-700">_</span>
	</footer>
</div>
