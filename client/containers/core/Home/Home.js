import React from "react";
import s from "./Home.scss";
import useStyles from "isomorphic-style-loader/useStyles";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const Home = (props) => {
	useStyles(s);
	return (
		<>
			<h1 className="main-heading home-heading">
				<span className="main-heading">
					<strong>Bythe2020</strong>{" "}
				</span>
				<span className="sub-heading">
					Boiler plate web application made with{" "}
					<strong>MERN STACK</strong> using webpack and babel.{" "}
				</span>
			</h1>
			<Link to="/about" href className="btn btn-info">
				More Info
			</Link>

			<Helmet>
				<title>Bythe2020</title>
			</Helmet>
		</>
	);
};

export default Home;
