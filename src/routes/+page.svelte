<script lang="ts">
	import LinksSection from '$lib/LinksSection.svelte';
	import { typewriter } from '$lib/typewriter-transition';

	const nameContent = 'Leila Ilkhani';
	const titleContent = 'Frontend Engineer';
	const descriptionContent = `A systems thinker at heart,
	my journey from backend roots empowers me to craft elegant web solutions that delight users while empowering developers.
	I specialize in building maintainable architectures that turn complex challenges into seamless experiences.`;
	const footerContent = 'Where clean code meets clear communication';

	const Steps = {
		Name: 0,
		Title: 1,
		Description: 2,
		Links: 3,
		Footer: 4
	} as const;

	let currentStep: number = $state(0);

	function onIntroEndCapture() {
		currentStep++;
	}
</script>

<div class="mx-auto flex w-full max-w-md flex-col gap-8 py-8">
	<section class="flex flex-col gap-4">
		<div class="flex flex-col gap-1">
			<h1
				in:typewriter={{
					duration: 300,
					speed: 3
				}}
				onintroendcapture={onIntroEndCapture}
				class="text-4xl font-bold"
			>
				{nameContent}
			</h1>
			{#if currentStep >= Steps.Title}
				<h2
					class="text-2xl text-foreground-400"
					in:typewriter={{
						speed: 7
					}}
					onintroendcapture={onIntroEndCapture}
				>
					{titleContent}
				</h2>
			{/if}
		</div>
		{#if currentStep >= Steps.Description}
			<p
				class="whitespace-pre-line text-sm"
				in:typewriter={{
					speed: 15
				}}
				onintroendcapture={onIntroEndCapture}
			>
				{descriptionContent}
			</p>
		{/if}
	</section>
	{#if currentStep >= Steps.Links}
		<section>
			<LinksSection onintroendcapture={onIntroEndCapture} />
		</section>
	{/if}
	{#if currentStep >= Steps.Footer}
		<footer
			class="text-sm"
			in:typewriter={{
				speed: 7,
				hideCursor: true
			}}
			onintroendcapture={onIntroEndCapture}
		>
			{footerContent}
			<span class="-ml-1 -translate-y-px animate-pulse animate-duration-700">_</span>
		</footer>
	{/if}
</div>
