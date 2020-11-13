import React from 'react';
import { graphql } from 'gatsby';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '.././components/layout';

const Post = ({ data }) => {
	console.log(data);

	let document = data.post.postContent.json;
	let fluidImg = data.post.postImage;
	console.log(fluidImg);
	const Bold = ({ children }) => <span className="bold">{children}</span>;

	// const Text = ({ children }) => <p className="align-center">{children}</p>;

	const options = {
		renderMark: {
			[MARKS.BOLD]: (text) => <Bold>{text}</Bold>
		},
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>
			// [BLOCKS.EMBEDDED_ASSET]: (node, children) => <img src={children} alt="jay" />
		}
	};
	return (
		<Layout>
			<div>
				<h1 class="text-6xl">{data.post.postTitle}</h1>
				<img src={data.post.postImage.fluid.src} alt="way" />
				{documentToReactComponents(document, options)}
				<img src={data.post.postImage2.fluid.src} alt="yot" />
			</div>
		</Layout>
	);
};

export default Post;

export const pageQuery = graphql`
	query($slug: String!) {
		post: contentfulBlogPost(slug: { eq: $slug }) {
			slug
			postTitle
			postDate
			postContent {
				json
			}
			postImage {
				fluid(maxWidth: 480) {
					...GatsbyContentfulFluid
				}
			}
			postImage2 {
				fluid(maxWidth: 480) {
					...GatsbyContentfulFluid
				}
			}
		}
	}
`;
