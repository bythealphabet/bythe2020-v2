import React, { Fragment, useContext } from "react";
import s from "./About.scss";
import useStyles from "isomorphic-style-loader/useStyles";
import { Link } from "react-router-dom";

const About = (props) => {
	useStyles(s);
	return (
		<div className="box box-green">
			<p>Esaki ta hana kolo kora</p>
			<Link to="/">home</Link>
		</div>
	);
};

export default About;
