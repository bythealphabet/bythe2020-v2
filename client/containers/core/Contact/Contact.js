import React from "react";
import { Helmet } from "react-helmet";
import { Input } from "../../../components/Forms/Input";

const Contact = (props) => {
	return (
		<>
			<h1 className="heading">Contact</h1>
			<section className="section section-contact">
				<form action="" className="form">
					<Input label="Email" />
					<label htmlFor="" className="label">
						Comment
					</label>
					<textarea
						className="input"
						name=""
						id=""
						cols="30"
						rows="10"
					></textarea>
					<button className="btn">Submit</button>
				</form>
			</section>
			<Helmet>
				<title>Bythe2020 Contact us</title>
			</Helmet>
		</>
	);
};

export default Contact;
