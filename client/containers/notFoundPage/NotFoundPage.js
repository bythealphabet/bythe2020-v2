import React from "react";
import s from "./NotFoundPage.scss";
import useStyles from "isomorphic-style-loader/useStyles";
import { Link, useHistory } from "react-router-dom";

const NotFoundPage = ({ staticContext = {} }) => {
	const history = useHistory();
	useStyles(s);
	staticContext.notFound = true;
	return (
		<div className={`main-notfoundpage `}>
			<p>
				Well this is Odd,
				<br /> <span>page not found</span>
			</p>
			<div className="not-found-btns">
				<p>You can always go back</p>
				<button onClick={() => history.goBack()} className="btn">
					Go Back
				</button>
			</div>

			<div className="not-found-btns">
				<p>or go Home</p>
				<button onClick={() => history.push("/")} className="btn">
					Home
				</button>
			</div>
		</div>
	);
};

export default NotFoundPage;
