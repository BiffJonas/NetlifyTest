import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
	return (
		<header>
			<h1>Infobord</h1>
			<hr />
			<div>
				<NavLink
					to="/"
					exact
				>
					Home
				</NavLink>
				<NavLink to="/login">Login</NavLink>
			</div>
		</header>
	);
};

export default Header;
