interface TypewriterParams {
	speed?: number;
	duration?: number;
	hideCursor?: boolean;
	delay?: number;
}

/**
 * Creates a typewriter effect transition for text content
 * @param node - The HTML element containing the text to animate
 * @param params - Configuration parameters
 * @param params.speed - Characters per second (ignored if duration is provided)
 * @param params.duration - Total duration of the animation in milliseconds
 * @param params.hideCursor - Whether to hide the cursor during animation
 * @param params.delay - Delay before starting the animation in milliseconds
 */
export function typewriter(
	node: HTMLElement,
	{ speed = 1, duration, hideCursor = false, delay = 0 }: TypewriterParams
) {
	const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;
	const validFirstChild =
		node.firstChild &&
		(node.firstChild.nodeType === Node.TEXT_NODE || !!node.firstChild.textContent?.length);

	if (!valid && !validFirstChild) {
		throw new Error(
			`This transition only works on elements with a single text node child or a first child that is a text node or has text content`
		);
	}

	const refNode = validFirstChild ? node.firstChild : node;
	const text = refNode.textContent ?? '';
	const totalDuration = duration ?? text.length / (speed * 0.01);

	// Initially hide the entire node
	node.style.visibility = 'hidden';

	return {
		duration: totalDuration + delay,
		tick: (t: number) => {
			const progress = t * (totalDuration + delay);
			if (progress <= delay) {
				return;
			}

			// Show the node once delay is reached
			node.style.visibility = 'visible';

			const adjustedT = (progress - delay) / totalDuration;
			const i = Math.trunc(text.length * adjustedT);
			refNode.textContent = text.slice(0, i) + (i < text.length && !hideCursor ? '_' : '');
		}
	};
}
