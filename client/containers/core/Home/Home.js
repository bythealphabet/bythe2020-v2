import React from "react";
import s from "./Home.scss";
import g from "./HomeGrid.scss";

import useStyles from "isomorphic-style-loader/useStyles";

import { Helmet } from "react-helmet";

import HomeHeader from "./HomeHeader/HomeHeader";
import HomeVertisol from "./HomeVertisol/HomeVertisol";
import HomeSolarGard from "./HomeSolarGard/HomeSolarGard";
import HomeRollerShutter from "./HomeRollerShutter/HomeRollerShutter";
import HomeContactForm from "./HomeContactForm/HomeContactForm";
import Footer from "../../navigation/Footer/Footer";

const Home = (props) => {
	useStyles(s);
	useStyles(g);
	return (
		<>
			<Helmet>
				<title>vertisol & solarGard Home</title>
				<meta
					property="og:title"
					content="Home of Blinds and Awnings"
				/>
			</Helmet>
			<HomeHeader />
			<HomeVertisol />
			<HomeSolarGard />
			<HomeRollerShutter />
			<HomeContactForm />
			<Footer />
		</>
	);
};

export default Home;
