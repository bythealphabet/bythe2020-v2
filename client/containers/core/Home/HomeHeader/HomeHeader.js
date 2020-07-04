import React from "react";
import s from "./HomeHeader.scss";
import g from "./HomeHeaderGrid.scss"
import useStyles from "isomorphic-style-loader/useStyles";
import { Link } from "react-router-dom";

const HomHeader = (props) => {
	useStyles(s);
	useStyles(g)
	return (
		<section className={`main-horizontal main-home-header `}>
			<h1 className="home-heading heading-1 home-heading-ongrid ">
				Enjoy the Day, <br /> Control the sunlight.
			</h1>
			<p className="home-para para home-para-ongrid ">
				We have a big variety of <strong> high quality </strong> long
				lasting Awnings that will enhance and protect from the sun
			</p>
			<Link to="/contact" className="home-btn btn home-btn-ongrid">
				Get Yours Today
			</Link>
			<div className="home-img img-polaroid img-home-ongrid">
				<img
					src="https://s3.amazonaws.com/vertisolsolargard/retractable_drop_arm_awnings/00.jpg"
					alt=""
				/>
			</div>
		</section>
	);
};

export default HomHeader;
