import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import LogoAlt from './logoalt';
import Socials from './socials';

const Footer = () => (
	<footer class="p-10 bg-indigo-1000 w-full">
		<div class="p-8 mx-auto flex flex-row items-center justify-between max-w-5xl text-gray-100">
			<div>
				<ul class="flex flex-row items-center mb-6">
					<li class="font-bold border-b-2 border-purple-600 hover:text-gray-200 hover:border-purple-100 mr-4">
						Home
					</li>
					<li class="font-bold border-b-2 border-purple-600">Portfolio</li>
				</ul>
				<p class="text-sm text-gray-600 mb-6">
					This blog is built with Gatsby using <br />Contentful CMS, Tailwind and lots of tea. <br />{' '}
				</p>
			</div>

			<div class="flex flex-col justify-between">
				<Socials />
				<p class=" text-sm mt-4 text-gray-600 text-right">&#169; {new Date().getFullYear()}</p>
			</div>
		</div>
	</footer>
);

export default Footer;
