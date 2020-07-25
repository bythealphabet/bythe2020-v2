import React from "react";
import s from "./ScrollBar.scss";
import useStyles from "isomorphic-style-loader/useStyles";

const ScrollBar = (props) => {
	useStyles(s);
	return (
		<main className="scroll-bar">
			<section className="content">
				<div className="scrolling-wrapper">
					<div className="card">
						<h2>Card</h2>
					</div>
					<div className="card">
						<h2>Card</h2>
					</div>
					<div className="card">
						<h2>Card</h2>
					</div>
					<div className="card">
						<h2>Card</h2>
					</div>
					<div className="card">
						<h2>Card</h2>
					</div>
					<div className="card">
						<h2>Card</h2>
					</div>
					<div className="card">
						<h2>Card</h2>
					</div>
					<div className="card">
						<h2>Card</h2>
					</div>
					<div className="card">
						<h2>Card</h2>
					</div>
				</div>
			</section>
		</main>
	);
};

export default ScrollBar;
