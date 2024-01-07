/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				InterTight: ['Inter Tight', 'sans-serif']
			},
			animation: {
				'spin-slow': 'spin 8s linear infinite',
			  }
		}
	},
	plugins: []
};
