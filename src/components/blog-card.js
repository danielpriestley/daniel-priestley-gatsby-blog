import { Link } from 'gatsby';
import React from 'react';

const BlogCard = ({ data }) => (
	<div class="mb-4">
		<Link to={`/blog/posts/${data.slug}`}>
			<div
				class="flex justify-between flex-row items-center mb-2 shadow rounded hover:shadow-md border p-4 border-gray-300 text-indigo-1000 hover:border-gray-400 "
				key={data.id}
			>
				<div class="h-full md:w-2/3">
					<p class="text-gray-500 text-xs mb-1">{data.postDate}</p>
					<h1 class="font-semibold font-sans text-2xl leading-6 md:leading-snug  md:mb-0 mb-1 md:text-xl">
						{data.postTitle}
					</h1>
					<h2 class="mb-2 md:mb-3 font-sans text-purple-600 text-sm">{data.author.authorName}</h2>
					<p class="font-sans text-gray-700 md:w-3/4">{data.previewText}</p>
				</div>

				{/* this will prevent image loading on mobile */}
				<img class="h-24 mr-2 hidden md:block" src={data.postImage.file.url} alt="blog" />
			</div>
		</Link>
	</div>
);

export default BlogCard;
