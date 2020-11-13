import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from './logo';
import Hamburger from './hamburger';

const Header = ({ siteTitle }) => (
	<header
		style={{
			marginBottom: `1.45rem`
		}}
	>
		<div class="p-8 mx-auto flex flex-row items-center justify-between max-w-5xl">
			<Logo />
			<Hamburger />
		</div>
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
