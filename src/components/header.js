// import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from './logo';
import DarkSocials from './socials-dark';

const Header = ({ siteTitle }) => (
	<header class="md:fixed mb-2 md:mb-16 w-full">
		<div class="md:p-8 px-6 py-8 mx-auto flex flex-row items-base justify-between max-w-6xl">
			<Logo />
			<DarkSocials />
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
