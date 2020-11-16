import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BlogCard from '.././components/blog-card';

const IndexPage = ({ data }) => (
	<Layout>
		<SEO title="Home" />
		<h1 class="text-4xl font-medium mb-6">Blog Posts</h1>
		<div class="flex flex-wrap content-between">
			{data.allContentfulBlogPost.edges.map(({ node }) => (
				// <div key={node.id}>
				// 	<Link to={`/blog/posts/${node.slug}`}>
				// 		<h1>{node.postTitle}</h1>
				// 	</Link>
				// </div>
				<BlogCard data={node} />
			))}
		</div>
		<Link to="/page-2/">Go to page 2</Link> <br />
		<Link to="/using-typescript/">Go to "Using TypeScript"</Link>
	</Layout>
);

export const query = graphql`
	query {
		allContentfulBlogPost {
			edges {
				node {
					postTitle
					postDate
					postImage {
						file {
							url
						}
					}
					author {
						authorName
					}
					slug
					id
				}
			}
		}
	}
`;

export default IndexPage;
