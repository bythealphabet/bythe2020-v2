import React from "react";
import s from "./HomeRollerShutter.scss";

import useStyles from "isomorphic-style-loader/useStyles";
import HomeSection from "../../../../components/Home/HomeSection";

const HomeRollerShutter = (props) => {
	useStyles(s);

	const imagesArray = [
		"https://s3.amazonaws.com/vertisolsolargard/roller_shutter/04.jpg",
		"https://s3.amazonaws.com/vertisolsolargard/roller_shutter/06.jpg",
		"https://s3.amazonaws.com/vertisolsolargard/roller_shutter/10.jpg",
	];
	return (
		<section className="main-horizontal main-home main-home-rollershutter">
			<HomeSection
				title="get it all"
				titleBold="Secured"
				para1="Keep you Home and Business Save and Secure. Our Shutters are strong,   Well built against Robbery and Heavy Weather conditions."
				imagesArray={imagesArray}
			/>
		</section>
	);
};

export default HomeRollerShutter;
