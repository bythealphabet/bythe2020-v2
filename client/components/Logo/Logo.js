import React from "react";
import "./Logo.scss"
import logo from "../../assets/img/logo.svg";
import {Link} from "react-router-dom"

export const Logo = props => (
	<Link to="/" className="logo-box">
		<img src={logo} alt="Bythealphabet logo" className="logo" />
	</Link>
);
