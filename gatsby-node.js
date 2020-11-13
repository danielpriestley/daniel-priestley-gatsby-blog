const path = require('path');
const slash = require('slash');

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	const { getContent } = actions;

	return graphql(
		`
            {
                allContentfulBlogPost {
                    edges {
                        node {
                            slug
                        }
                    }
                }
            }
        `
	)
		.then((result) => {
			if (result.errors) {
				console.log('Error with Contentful Data', result.errors);
			}

			const postTemplate = path.resolve('./src/templates/post.js');

			result.data.allContentfulBlogPost.edges.forEach((post) => {
				createPage({
					path: `/blog/posts/${post.node.slug}/`,
					component: slash(postTemplate),
					context: {
						slug: post.node.slug
					}
				});
			});
		})
		.catch((error) => console.log('Error with Contentful Data', error));
};
