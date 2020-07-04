import React from "react";
import s from "./HomeContactForm.scss";
import g from "./HomeContactFormGrid.scss";

import useStyles from "isomorphic-style-loader/useStyles";
import { Input } from "../../../../components/Forms/Input";

const HomeContactForm = (props) => {
	useStyles(s);
	useStyles(g);

	return (
		<section className="main-horizontal main-home-contact">
			<div className="home-contact-form home-form-on-grid">
				<h2 className="consultation-header">
					Sign up now <span>for a free consultation</span>
				</h2>

				<p className="consultation-para">
					Fill in your name, <br />
					Email and/or Phone number <br /> and Click the "Enjoy life"
					button
				</p>
				<form className="consultation-form">
					<Input label="name" type="text" />
					<Input label="email" type="email" />
					<Input label="phone number" type="number" />
					<button className=" btn btn-primary">Enjoy Life</button>
				</form>
			</div>
			<div className="home-contact-address home-address-on-grid">
				<p className="home-contact-address-para1">Or call us at:</p>
				<p className="home-contact-address-para2">+(599 9) 736 7855</p>
				<p className="home-contact-address-para3">+(599 9) 736 7857</p>
				<p className="home-contact-address-para4">
					Address: Groot Davelaar kavel 12B
				</p>
				<p className="home-contact-address-para5">
					Curacao Dutch Caribbean
				</p>
			</div>
			<div
				// href="https://goo.gl/maps/anTyFK1ohy42"
				className="home-contact-map home-map-on-grid"
			>
				{/* <div> */}
				{/* 	<iframe */}
				{/* 		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.876789577849!2d-68.90739328525339!3d12.120581791418177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e837d1e48d50e6b%3A0xb074e7f49e3f6a49!2sVertisol%20Curacao%20N.V.!5e0!3m2!1sen!2sus!4v1592677795158!5m2!1sen!2sus" */}
				{/* 		frameborder="0" */}
				{/* 		allowfullscreen="" */}
				{/* 		aria-hidden="false" */}
				{/* 		tabindex="0" */}
				{/* 	></iframe> */}
				{/* </div> */}
			</div>
		</section>
	);
};

export default HomeContactForm;
