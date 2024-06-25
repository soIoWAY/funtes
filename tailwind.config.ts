import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			boxShadow: {
				'custom-border': '0 0 3px 3px rgba(250, 204, 21, 0.9)',
			},
			animation: {
				'border-pulse': 'borderPulse 3s infinite',
			},
			keyframes: {
				borderPulse: {
					'0%, 100%': { boxShadow: '0 0 3px 3px rgba(250, 204, 21, 1)' },
					'50%': { boxShadow: '0 0 3px 3px rgba(250, 204, 21, 0.0)' },
				},
			},
		},
	},
	plugins: [],
}
export default config
