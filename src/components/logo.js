import React from 'react';
import { Link } from 'gatsby';

const Logo = () => (
	<Link to="/">
		<h1 class="leading-7 inline-block border-b-2 border-purple-600 text-base font-sans text-indigo-1000">
			<span class="font-semibold">daniel</span>
			<span class="font-light">priestley</span>
		</h1>
	</Link>
);

export default Logo;
