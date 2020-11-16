import { Link } from 'gatsby';
import React from 'react';

const BlogCard = ({ data }) => (
	<div class="flex-1">
		<div
			class="flex flex-row flex-no-wrap items-stretch mb-2 rounded border p-4 border-gray-300 hover:border-gray-600 "
			key={data.id}
		>
			<Link to={`/blog/posts/${data.slug}`}>
				<div class="h-full">
					<h1 class="text-xl">{data.postTitle}</h1>
					<h2>{data.author.authorName}</h2>
				</div>

				<img class="h-24" src={data.postImage.file.url} alt="blog" />
			</Link>
		</div>
	</div>
);

export default BlogCard;
