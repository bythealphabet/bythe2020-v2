import React from 'react'
import "./Buttons.scss"


export const Button =(props)=>{
	return(
		<button className={`nav-link btn ${props.color}-btn ${props.btnSubmit}`}  onClick={props.click}>{props.text}</button>
	)
}