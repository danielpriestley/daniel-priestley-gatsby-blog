import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogCard from '.././components/blog-card';

const IndexPage = ({ data }) => (
	<Layout>
		<SEO title="Home" />
		<h1 class="text-4xl font-medium mb-4 text-indigo-1000">Blog Posts</h1>
		<hr class="mb-8" />
		<div class="">
			{data.allContentfulBlogPost.edges.map(({ node }) => (
				// <div key={node.id}>
				// 	<Link to={`/blog/posts/${node.slug}`}>
				// 		<h1>{node.postTitle}</h1>
				// 	</Link>
				// </div>
				<BlogCard data={node} />
			))}
		</div>
	</Layout>
);

export const query = graphql`
	query {
		allContentfulBlogPost(sort: { fields: [postDate], order: DESC }) {
			edges {
				node {
					postTitle
					postDate(formatString: "DD MMMM, YYYY")
					postImage {
						file {
							url
						}
					}
					author {
						authorName
					}
					previewText
					slug
					id
				}
			}
		}
	}
`;

export default IndexPage;
