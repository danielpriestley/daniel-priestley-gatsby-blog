import React from 'react';
import { Link, graphql } from 'gatsby';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '.././components/layout';
import TextButton from '.././components/text-button';

const Post = ({ data }) => {
	console.log(data);

	let document = data.post.postContent.json;
	let document2 = data.post.postContent2.json;

	let fluidImg = data.post.postImage;
	console.log(fluidImg);
	const Bold = ({ children }) => <span className="bold">{children}</span>;
	const Hyperlink = ({ children }) => <span class="text-blue-500">{children}</span>;

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
			[BLOCKS.HEADING_1]: (node, children) => <h1 class="text-2xl mt-10 mb-2">{children}</h1>,
			[BLOCKS.HEADING_2]: (node, children) => (
				<h2 class="text-2xl text-indigo-1000 font-semibold mt-10 mb-2">{children}</h2>
			),
			[INLINES.ENTRY_HYPERLINK]: (node, children) => {
				return <Hyperlink>{children}</Hyperlink>;
			},

			[BLOCKS.HR]: (node, children) => <hr class="mb-10 mt-10" />,

			[BLOCKS.PARAGRAPH]: (node, children) => (
				<p class="text-gray-900 text-lg md:text-xl font-body mb-4">{children}</p>
			),
			// [BLOCKS.QUOTE]: (node, children) => (
			// 	<blockquote class="border-l-4 p-2 border-purple-600 hover:border-gray-400">
			// 		<quote class="text-4xl bigquote">{children}</quote>
			// 		<span class="ml-6 font-bold font-display"> - {data.post.quoteAuthor.quoteAuthorName}</span>
			// 	</blockquote>
			// )

			[BLOCKS.QUOTE]: (node, children) => {
				const UnTaggedChildren = documentToReactComponents(node, {
					renderNode: {
						[BLOCKS.QUOTE]: (node, children) => children
					}
				});

				return (
					<blockquote class="flex flex-col mt-20 mb-20 justify-between border-l-4 pl-4 md:pl-12 border-purple-600 ">
						<quote class="mb-3 font-body leading-10 text-indigo-1000 italic text-3xl md:text-4xl">
							{UnTaggedChildren}
						</quote>
						<span class="text-gray-500 font-display"> - {data.post.quoteAuthor.quoteAuthorName}</span>
					</blockquote>
				);
			}

			// [BLOCKS.EMBEDDED_ASSET]: (node, children) => <img src={children} alt="jay" />
		}
	};
	return (
		<Layout>
			<div class="mb-24">
				<h2 class="text-gray-500 text-sm">{data.post.postDate}</h2>
				<a
					class="block text-purple-600 text-sm mb-8"
					href="https://www.linkedin.com/in/daniel-priestley-214982187/"
				>
					{data.post.author.authorName}
				</a>
				<h1 class="text-4xl md:text-5xl max-w-xl text-indigo-1000 font-medium leading-none blog-header mb-6">
					{data.post.postTitle}
				</h1>
				<hr />

				{data.post.postImage && (
					<img class="p-10 mt-10 mb-10 w-auto" src={data.post.postImage.file.url} alt="way" />
				)}
				{documentToReactComponents(document, options)}
				{data.post.postImage2 && (
					<img class="p-10 mt-10 mb-10  w-auto" src={data.post.postImage2.file.url} alt="way" />
				)}
				{documentToReactComponents(document2, options)}
				<p class="text-xs mb-16 font-display text-gray-700">
					All images used are royalty free from <a href="https://undraw.co">Undraw.co</a>
				</p>
				<Link to="/">
					<TextButton />
				</Link>
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
