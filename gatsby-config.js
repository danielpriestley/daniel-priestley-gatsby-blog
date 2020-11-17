require('dotenv').config({
	path: `.env`
});

module.exports = {
	siteMetadata: {
		title: `danielpriestley`,

		author: `@danielpriestley`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,

		`gatsby-transformer-sharp`,

		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
				accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/blog`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/dplogo.png`
			}
		},
		{
			resolve: 'gatsby-plugin-postcss',
			options: {
				postCssPlugins: [ require('tailwindcss')('./tailwind.config.js') ]
			}
		}
		// {
		//   resolve: 'gatsby-plugin-purgecss',
		//   options: {tailwind: true}
		// }
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
