import React from "react";

export default (props) => {
	return (
		<>
			<h3 className="home-heading-vs heading-1 home-heading-vs-ongrid ">
				{props.title} <span>{props.titleBold}</span>
			</h3>
			<p className="home-para-vs para home-para-vs-ongrid ">
				{props.para1}
			</p>
			<p className="home-para-vs-1 para home-para-vs-ongrid-1 ">
				{props.para2}
			</p>

			<div className="home-img img-polaroid home-vs-img home-vs-img-ongrid">
				<img
					src={props.imagesArray[0]}
					alt={` img1 ${props.title} ${props.titleBold}`}
				/>
			</div>

			<div className="images-carousel">
				{props.imagesArray.map((img, i) => (
					<div className="home-img img-polaroid polaroid-sub home-vs-img-sub" key={`${img}${i}`}>
						<img
							src={img}
							alt={` img ${props.title} ${props.titleBold}`}
						/>
					</div>
				))}
			</div>
		</>
	);
};
