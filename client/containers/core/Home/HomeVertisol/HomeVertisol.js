import React from "react";
import s from "./HomeVertisol.scss";

import useStyles from "isomorphic-style-loader/useStyles";
import HomeSection from "../../../../components/Home/HomeSection";

const HomeVertisol = (props) => {
	useStyles(s);

	const imagesArray = [
		"https://s3.amazonaws.com/vertilux-website/galleries/images/000/000/169/original/vertilux_rollershades_061.jpg",
		"https://s3.amazonaws.com/vertilux-website/galleries/images/000/000/082/original/vertilux_horizontalblinds_010.jpg",
		"https://s3.amazonaws.com/vertilux-website/galleries/images/000/000/017/original/vertilux_romanshades_001.jpg",
	];

	return (
		<section className="main-horizontal main-home main-home-vertisol">
			<HomeSection
				title="There's no place like"
				titleBold="HOME"
				para1="Control the Sunlight, make your Home cool, cozy and pleasant."
				para2="You will get I costume made well finished indoor shade, choose between many models, materials sizes."
				imagesArray={imagesArray}
			/>
		</section>
	);
};

export default HomeVertisol;
