module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: [],
	theme: {
		extend: {
			colors: {
				indigo: {
					'900': '#3F3D56',
					'1000': '#20202C'
				},
				purple: {
					'600': '#6C63FF'
				},
				'off-white-dp': '#F8F9FA'
			},
			linearBorderGradients: (theme) => ({
				colors: theme('colors')
			}),
			fontFamily: {
				sans: [ 'Circular Std', 'Helvetica', 'Segoe UI', 'Arial', 'sans-serif' ]
			}
		},
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px'
			// => @media (min-width: 1280px) { ... }
		},
		fontFamily: {
			display: [ '"Circular Std"' ],
			body: [ '"Times New Roman"' ]
		}
	},
	variants: {},
	plugins: [ require('tailwindcss-border-gradients')() ]
};
