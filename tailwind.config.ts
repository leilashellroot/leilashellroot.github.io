import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				background: {
					/**@see \definecolor{backgroundColor}{RGB}{40,40,40} */
					DEFAULT: 'rgb(40, 40, 40)'
				},
				primary: {
					// same as main
					DEFAULT: 'rgb(240, 155, 77)',
					/**@see \definecolor{sectionColor}{RGB}{240,155,77} */
					main: 'rgb(240, 155, 77)',
					/**@see \definecolor{roleColor}{RGB}{206,172,143} */
					pale: 'rgb(206, 172, 143)'
				},
				foreground: {
					// same as 500
					DEFAULT: 'rgb(200, 200, 200)',
					900: 'rgb(255, 255, 255)',
					/**@see \definecolor{nameColor}{RGB}{235,235,235} */
					800: 'rgb(235, 235, 235)',
					/**@see \definecolor{secondaryTitleColor}{RGB}{222,222,222} */
					700: 'rgb(222, 222, 222)',
					/**@see \definecolor{textColor}{RGB}{200,200,200} */
					500: 'rgb(200, 200, 200)',
					/**@see \definecolor{secondaryTextColor}{RGB}{155,155,155} */
					400: 'rgb(155, 155, 155)',
					200: 'rgb(115, 115, 115)'
				}
			}
		}
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
