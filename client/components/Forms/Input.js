import React, { useState } from "react";

import s from "./Forms.scss";

import useStyles from "isomorphic-style-loader/useStyles";

export const Input = props => {
	useStyles(s)
	return (
		<div className="input-box">
			<input type="hidden" display="hidden" />
			<label className="label">{props.label}</label>
			<input
				onChange={props.change}
				className={`input`}
				placeholder={props.placeholder}
				type={props.type}
				value={props.value}
				autoComplete={props.type}
			/>
		</div>
	);
};

export const File = props => {
	const [progressBar, setProgressBar] = useState(0);
	const [dropFile, setDropFile] = useState(false);

	const drop = e =>{
		e.preventDefault();
		setDropFile(false)
		const value = e.dataTransfer.files[0];
		props.drop(value)
	}

	const draggingFileLeave = e => {
		e.preventDefault();
		setDropFile(false);
	};

	const draggingFileEnter = e => {
		e.preventDefault();
		setDropFile(true);
	};

	return (
		<div className="wrapper">
			<div className="upload-console">
				<h2 className="upload-console-header">Upload Photo</h2>
				<div className="upload-console-body">
					<h3>Select files from your computer</h3>
					<input
						name="file"
						onChange={props.change}
						className={`standard-upload-files`}
						type={props.type}
					/>
					<h3> Or drag and drop files below</h3>
					<div
						className={`upload-console-drop ${
							dropFile ? "droping" : ""
						}`}
						onDragOver={draggingFileEnter}
						onDragLeave={draggingFileLeave}
						onDrop={drop}
					>
						Just drag and drop files here
					</div>
					<div className="bar">
						<div
							className="bar-fill"
							style={{ width: `${progressBar}%` }}
						>
							<div className="bar-fill-text">
								{progressBar === 0 ? "" : `${progressBar}%`}
							</div>
						</div>
					</div>
					<div className="hidden">
						<h3 className="proccesed-files">Processed Files</h3>
						<div className="upload-console-upload">
							<p>filename.jpg</p>
							<p className="succed">succes</p>
						</div>
					</div>
				</div>
			</div>
			<input type="hidden" display="hidden" />
			<label className="label">{props.label}</label>
		</div>
	);
};
