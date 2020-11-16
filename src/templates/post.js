import React from 'react';
import { graphql } from 'gatsby';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '.././components/layout';

const Post = ({ data }) => {
	console.log(data);

	let document = data.post.postContent.json;
	let document2 = data.post.postContent2.json;

	let fluidImg = data.post.postImage;
	console.log(fluidImg);
	const Bold = ({ children }) => <span className="bold">{children}</span>;

	// const Text = ({ children }) => <p className="align-center">{children}</p>;

	const options = {
		renderMark: {
			[MARKS.BOLD]: (text) => <Bold>{text}</Bold>
		},
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node, children) => (
				<p>
					{' '}
					<br />
					{children}
				</p>
			),
			[BLOCKS.HEADING_1]: (node, children) => <h1 class="text-2xl mb-4">{children}</h1>,
			[BLOCKS.HEADING_2]: (node, children) => <h2 class="text-2xl mb-4">{children}</h2>,
			[BLOCKS.QUOTE]: (node, children) => (
				<blockquote>
					{children}
					<span>{data.post.quoteAuthor.quoteAuthorName}</span>
				</blockquote>
			)

			// [BLOCKS.EMBEDDED_ASSET]: (node, children) => <img src={children} alt="jay" />
		}
	};
	return (
		<Layout>
			<div>
				<h1 class="text-5xl max-w-xl font-medium leading-none blog-header">{data.post.postTitle}</h1>
				<h2>
					<span>{data.post.author.authorName} </span>
					{data.post.postDate}
				</h2>

				{data.post.postImage && <img class="p-10 w-auto" src={data.post.postImage.file.url} alt="way" />}
				{documentToReactComponents(document, options)}
				{data.post.postImage2 && <img class="p-10 w-auto" src={data.post.postImage2.file.url} alt="way" />}
				{documentToReactComponents(document2, options)}
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
			postDate(formatString: "DD MMMM, YYYY")
			author {
				authorName
			}
			quoteAuthor {
				quoteAuthorName
			}
			postContent {
				json
			}
			postContent2 {
				json
			}
			postImage {
				file {
					url
				}
				fluid(maxWidth: 480) {
					...GatsbyContentfulFluid
				}
			}
			postImage2 {
				fluid(maxWidth: 480) {
					...GatsbyContentfulFluid
				}
				file {
					url
				}
			}
		}
	}
`;
