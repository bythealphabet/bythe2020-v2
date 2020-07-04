import React, { useState, useEffect } from "react";
import s from "./Header.scss";
import useStyles from "isomorphic-style-loader/useStyles";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/img/logo.png";

const Header = (props) => {
	const [active, setActive] = useState(false);
	const location = useLocation();
	useStyles(s);

	const { pathname } = location;

	useEffect(() => {
		setActive(false);
	}, [location]);

	const navList = [
		{ to: "/", page: "Home" },
		{ to: "/products", page: "products" },
		{ to: "/contact", page: "Contact Us" },
		{ to: "/about", page: "About Us" },
	];

	const Logo = (props) => (
		<Link to="/" className="header-logo-box">
			<img src={logo} alt="vertiso solargard logo" />
		</Link>
	);

	const Hamburger = (props) => (
		<div
			className={`hamburger ${active ? "hamburger-close" : ""}`}
			onClick={() => setActive((prev) => !prev)}
		>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);

	return (
		<header className={`main-horizontal main-header `}>
			<Logo />
			<Hamburger />
			<nav className={`header-nav ${active ? "header-nav-open" : ""}`}>
				<ul>
					{navList.map((link, index) => {
						return (
							<li
								key={`${link.to}${link.page}`}
								className={` ${
									index == 1 && pathname === link.to
										? "current-product-page"
										: ""
								}`}
							>
								<Link
									to={link.to}
									className={`${
										pathname === link.to
											? "current"
											: "nav-link"
									}`}
								>
									{link.page}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
