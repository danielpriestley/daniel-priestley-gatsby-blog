import React from 'react';
import Socials from './socials';

const Footer = () => (
	<footer class="p-10 bg-indigo-1000 w-full">
		<div class="p-8 mx-auto max-w-5xl">
			<div class="flex flex-row items-center mb-6 justify-between">
				<ul class="flex flex-row items-center">
					<li class="font-bold border-b-2 border-purple-600 text-gray-100 hover:text-gray-200 hover:border-purple-100 mr-4 cursor-pointer">
						Home
					</li>
					<li class="font-bold border-b-2 border-purple-600 cursor-pointer text-gray-100 hover:text-gray-200 hover:border-purple-100">
						Portfolio
					</li>
				</ul>
				<Socials />
			</div>

			<div class="flex flex-row items-center justify-between">
				<p class="text-sm text-gray-600 ">
					This blog is built with Gatsby using <br />Contentful CMS, Tailwind and lots of tea. <br />{' '}
				</p>
				<p class=" text-sm self-end text-gray-600 text-right">&#169; {new Date().getFullYear()}</p>
			</div>
		</div>
	</footer>
);

export default Footer;
