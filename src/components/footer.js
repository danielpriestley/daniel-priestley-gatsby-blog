import React from 'react';
import Socials from './socials';
import { Link } from 'gatsby';

const Footer = () => (
	<footer class="p-10 footer mt-10 bg-indigo-1000 w-full">
		<div class="md:p-8 mx-auto max-w-6xl">
			<div class="flex flex-col md:flex-row  md:items-center mb-6 justify-between">
				<ul class="mb-6 md:mb-0 flex flex-row items-center">
					<Link to="/">
						<li class="font-sans block font-semibold border-b-2 border-purple-600 text-gray-100 hover:text-gray-200 hover:border-purple-100 mr-4 cursor-pointer">
							Home
						</li>
					</Link>

					<a
						href="https://github.com/danielpriestley"
						class="font-sans font-semibold border-b-2 border-purple-600 cursor-pointer text-gray-100 hover:text-gray-200 hover:border-purple-100"
					>
						Portfolio
					</a>
				</ul>
				<Socials />
			</div>

			<div class="flex flex-col font-sans md:flex-row md:items-center justify-between">
				<p class="text-sm mb-3 md:mb-0 text-gray-600 ">
					This blog is built with Gatsby using <br />Contentful CMS, Tailwind and lots of tea. <br />{' '}
				</p>
				<p class=" text-sm md:self-end font-sans text-gray-600 md:text-right">
					&#169; {new Date().getFullYear()}
				</p>
			</div>
		</div>
	</footer>
);

export default Footer;
