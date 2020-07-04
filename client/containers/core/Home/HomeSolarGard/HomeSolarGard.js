import React from "react";
import s from "./HomeSolarGard.scss";

import useStyles from "isomorphic-style-loader/useStyles";

import HomeSection from "../../../../components/Home/HomeSection";

const HomeSolarGard = (props) => {
	useStyles(s);

	const imagesArray = [
		"https://s3.amazonaws.com/vertisolsolargard/canopies/08.jpg",
		"https://s3.amazonaws.com/vertisolsolargard/shade_sails/02.jpg",
		"https://s3.amazonaws.com/vertisolsolargard/vertical_drop_awnings/05.jpg",
	];
	return (
		<section className="main-horizontal main-home main-home-solargard">
			<HomeSection
				title="I love my"
				titleBold="Patio"
				para1="Get outside Enjoy the Breeze, Relax Outdoors."
				para2="Get the best Shades for your home. We have a big Variety of high quality long lasting Awnings. that will enhance and protect from the sun."
				imagesArray={imagesArray}
			/>
		</section>
	);
};

export default HomeSolarGard;
