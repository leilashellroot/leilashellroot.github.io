import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [
		function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'animate-delay': (value) => ({
						animationDelay: value
					})
				},
				{ values: theme('transitionDelay') }
			);
		},
		function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'animate-duration': (value) => ({
						animationDuration: value
					})
				},
				{ values: theme('transitionDuration') }
			);
		}
	]
} satisfies Config;
