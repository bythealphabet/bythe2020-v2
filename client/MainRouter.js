import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import s from "./index.scss";
import useStyles from "isomorphic-style-loader/useStyles";

// -----------CORE
import Home from "./containers/core/Home/Home";
import Contact from "./containers/core/Contact/Contact";
import About from "./containers/core/About/About";

// -----------NAVIGATION
import Header from "./containers/navigation/Header/Header";

// -----------Not Found Page
import NotFoundPage from "./containers/notFoundPage/NotFoundPage"

export const routesArray = [
	{
		path: "/",
		component: Home,
		exact: true,
	},
	{
		path: "/about",
		component: About,
	},
	{
		path: "/contact",
		component: Contact,
	},

	{
		component: NotFoundPage,
	},
];

export const MainRouter = (props) => {
	useStyles(s);

	useEffect(() => {
		const serverSideStyles = document.getElementById("server-side-styles");
		if (serverSideStyles && serverSideStyles.parentNode)
			serverSideStyles.parentNode.removeChild(serverSideStyles);
	}, []);

	return (
		<>
			<Header />
			{props.children}
		</>
	);
};
