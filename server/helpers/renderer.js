import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "isomorphic-style-loader/StyleContext";
import { MainRouter, routesArray } from "../../client/MainRouter";
import { Helmet } from "react-helmet";

import template from "./../../template";

export default (req, res) => {
	const css = new Set(); // CSS for all rendered React components
	const insertCss = (...styles) =>
		styles.forEach((style) => css.add(style._getCss()));

	const context = {};
	const markup = renderToString(
		<Provider value={{ insertCss }}>
			<StaticRouter location={req.url} context={context}>
				<MainRouter>{renderRoutes(routesArray)}</MainRouter>
			</StaticRouter>
		</Provider>
	);

	const helmet = Helmet.renderStatic()

	if (context.notFound) {
		res.status(404).send(template(markup, css, helmet));
		return;
	}

	res.status(200).send(template(markup, css, helmet));
};
