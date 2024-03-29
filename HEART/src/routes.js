import React from "react";
import Loadable from "react-loadable";

import DefaultLayout from "./containers/DefaultLayout";

function Loading() {
	return <div>Loading...</div>;
}

const Dashboard = Loadable({
	loader: () => import("./views/Dashboard/Dashboard"),
	loading: Loading
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
	{ path: "/", exact: true, name: "Home", component: DefaultLayout },
	{
		path: "/dashboard",
		exact: true,
		name: "Dashboard",
		component: Dashboard
	}
];

export default routes;
