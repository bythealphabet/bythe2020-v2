import React, { useState, useEffect } from "react";

const useFromData = (formObj, obj) => {
	const [inputData, setInputData] = useState({ ...formObj });

	useEffect(() => {
		setInputData({ ...formObj, ...obj });
	}, [obj]);

	const dropImage = data => setInputData({ ...inputData, photo: data });

	const onInputChange = name => e => {
		let value = name === "photo" ? e.target.files[0] : e.target.value;
		setInputData({ ...inputData, [name]: value });
	};

	return [inputData, onInputChange, dropImage];
};

export default useFromData;
