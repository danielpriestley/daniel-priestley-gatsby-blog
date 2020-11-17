/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
import './layout.css';

const Layout = ({ children }) => {
	return (
		<div class="flex flex-col min-h-screen justify-between bg-off-white-dp">
			<Header />
			<div class="flex-1 max-w-2xl min-h-full md:mt-40 mx-auto px-6 md:px-0">
				<main>{children}</main>
			</div>
			<Footer />
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
