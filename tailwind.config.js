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
				}
			},
			linearBorderGradients: (theme) => ({
				colors: theme('colors')
			})
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
		}
	},
	variants: {},
	plugins: [ require('tailwindcss-border-gradients')() ]
};
