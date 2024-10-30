import plugin from "tailwindcss/plugin";
import { Config } from "tailwindcss";

const config: Config = {
	darkMode: ['class', 'class'],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		colors: {
    			background: '#161616',
    			foreground: '#ffffff',
    			card: {
    				DEFAULT: '#202020',
    				foreground: '#c0c0c0'
    			},
    			primary: {
    				DEFAULT: '#f41f1f',
    				foreground: '#ffffff'
    			},
    			border: '#1b1b1b',
    			input: '#202020',
    			ring: '#f41f1f',
    			deactivated: '#C0C0C0'
    		},
    		fontFamily: {
    			Inter: ["Inter", "sans-serif"],
    			Poppins: ["Poppins", "sans-serif"]
    		},
    		fontSize: {
    			h1: ["36px", "1.2"],
    			h2: ["32px", "1.2"],
    			h3: ["24px", "1.2"],
    			h4: ["20px", "1.2"],
    			h5: ["16px", "1.2"],
    			body1: ["14px", "1.6"],
    			body2: ["12px", "1.6"]
    		},
    		borderRadius: {
    			lg: '50px',
    			md: 'calc(var(--radius))',
    			sm: 'calc(var(--radius))'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				'.gradient-border': {
					position: 'relative',
					padding: '2px',
					borderRadius: 'var(--tw-border-radius)',
					background: 'linear-gradient(to right, #f41f1f, #ffffff)',
				},
				'.gradient-inner': {
					backgroundColor: '#ffffff',
					borderRadius: 'var(--tw-border-radius)',
					padding: '1rem',
				},
			});
		}),
		plugin(function ({ addBase, theme }) {
			addBase({
				h1: {
					fontFamily: "var(--font-inter)",
					fontSize: theme('fontSize.h1'),
				},
				h2: {
					fontFamily: "var(--font-poppins)",
					fontSize: theme('fontSize.h2'),
				},
				h3: {
					fontFamily: "var(--font-inter)",
					fontSize: theme('fontSize.h3'),
				},
				h4: {
					fontFamily: "var(--font-inter)",
					fontSize: theme('fontSize.h4'),
				},
				h5: {
					fontFamily: "var(--font-poppins)",
					fontSize: theme('fontSize.h5'),
				},
				p: {
					fontFamily: "var(--font-poppins)",
					fontSize: theme('fontSize.body1'),
				},
				small: {
					fontFamily: "var(--font-poppins)",
					fontSize: theme('fontSize.body2'),
				},
			});
		}),
		plugin(function({ addUtilities, theme }) {
			addUtilities({
				'.muted': {
					color: theme('colors.deactivated'),
				},
			});
		}),
	],
};

export default config;
