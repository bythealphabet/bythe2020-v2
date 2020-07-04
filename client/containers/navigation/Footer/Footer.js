import React from 'react'
import s from "./Footer.scss"
import useStyles from "isomorphic-style-loader/useStyles";


const Footer =(props)=>{
	useStyles(s)
	return(
		<footer className={`footer`}>Footer</footer>
	)
}


export default Footer