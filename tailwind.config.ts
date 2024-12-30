import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'var(--font-geist-sans)'
  			],
  			mono: [
  				'var(--font-geist-mono)'
  			]
  		},
  		fontSize: {
  			'8xl': '7rem'
  		},
  		colors: {
  			navy: '#0B0B1E',
  			navyLight: '#1A1A2E',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			theme: {
  				primary: {
  					'300': 'hsl(var(--theme-primary-300))',
  					'400': 'hsl(var(--theme-primary-400))',
  					'500': 'hsl(var(--theme-primary-500))',
  					'600': 'hsl(var(--theme-primary-600))',
  					'700': 'hsl(var(--theme-primary-700))'
  				},
  				secondary: {
  					'300': 'hsl(var(--theme-secondary-300))',
  					'400': 'hsl(var(--theme-secondary-400))',
  					'500': 'hsl(var(--theme-secondary-500))',
  					'600': 'hsl(var(--theme-secondary-600))'
  				},
  				neutral: {
  					'100': 'hsl(var(--theme-neutral-100))',
  					'200': 'hsl(var(--theme-neutral-200))',
  					'300': 'hsl(var(--theme-neutral-300))',
  					'400': 'hsl(var(--theme-neutral-400))',
  					'500': 'hsl(var(--theme-neutral-500))',
  					'600': 'hsl(var(--theme-neutral-600))',
  					'700': 'hsl(var(--theme-neutral-700))',
  					'800': 'hsl(var(--theme-primary-800))',
  					'900': 'hsl(var(--theme-primary-900))'
  				},
  				sunflower: {
  					'400': 'hsl(var(--theme-sunflower-400))',
  					'500': 'hsl(var(--theme-sunflower-500))',
  					'600': 'hsl(var(--theme-sunflower-600))'
  				},
  				tulip: {
  					'400': 'hsl(var(--theme-tulip-400))',
  					'500': 'hsl(var(--theme-tulip-500))',
  					'600': 'hsl(var(--theme-tulip-600))'
  				},
  				stale: {
  					'950': 'hsl(var(--theme-stale-950))'
  				},
  				rose: {
  					'300': 'hsl(var(--theme-rose-300))',
  					'400': 'hsl(var(--theme-rose-400))',
  					'500': 'hsl(var(--theme-rose-500))',
  					'600': 'hsl(var(--theme-rose-600))'
  				},
  				ocean: {
  					'400': 'hsl(var(--theme-ocean-400))',
  					'500': 'hsl(var(--theme-ocean-500))',
  					'600': 'hsl(var(--theme-ocean-600))',
  					'700': 'hsl(var(--theme-ocean-700))'
  				},
  				indigo: {
  					'400': 'hsl(var(--theme-indigo-400))',
  					'500': 'hsl(var(--theme-indigo-500))',
  					'600': 'hsl(var(--theme-indigo-600))',
  					'700': 'hsl(var(--theme-indigo-700))'
  				},
  				violet: {
  					'400': 'hsl(var(--theme-theme-violet-400))',
  					'500': 'hsl(var(--theme-theme-violet-500))',
  					'600': 'hsl(var(--theme-theme-violet-600))'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		typography: {
  			DEFAULT: {
  				css: {
  					color: 'hsl(var(--foreground))',
  					a: {
  						color: 'hsl(var(--primary))',
  						'&:hover': {
  							color: 'hsl(var(--primary-foreground))'
  						},
  						textDecoration: 'none'
  					},
  					h1: {
  						color: 'hsl(var(--foreground))'
  					},
  					h2: {
  						color: 'hsl(var(--foreground))'
  					},
  					h3: {
  						color: 'hsl(var(--foreground))'
  					},
  					h4: {
  						color: 'hsl(var(--foreground))'
  					},
  					blockquote: {
  						borderLeftColor: 'hsl(var(--primary))',
  						color: 'hsl(var(--muted-foreground))'
  					},
  					'code::before': {
  						content: '"'
  					},
  					'code::after': {
  						content: '"'
  					},
  					code: {
  						color: 'hsl(var(--primary))',
  						backgroundColor: 'hsl(var(--accent))',
  						borderRadius: '0.25rem',
  						padding: '0.25rem'
  					},
  					pre: {
  						backgroundColor: 'hsl(var(--card))',
  						color: 'hsl(var(--card-foreground))'
  					},
  					strong: {
  						color: 'hsl(var(--foreground))'
  					}
  				}
  			}
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
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
