import React from "react";
import { hot } from "react-hot-loader/root";
import { MainRouter, routesArray } from "./MainRouter";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";

const App = (props) => {
	return (
		<Router>
			<MainRouter>{renderRoutes(routesArray)}</MainRouter>
		</Router>
	);
};

export default hot(App);
