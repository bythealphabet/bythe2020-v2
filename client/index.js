import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "isomorphic-style-loader/StyleContext";

import App from "./App";



const insertCss = (...styles) => {
	const removeCss = styles.map((style) => style._insertCss());
	return () => removeCss.forEach((dispose) => dispose());
};

hydrate(
	<Provider value={{ insertCss }}>
		<App />
	</Provider>,
	document.getElementById("root")
);
