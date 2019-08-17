import { lazy } from "react";

const Home = lazy(() => import('../pages/Home'));

const routes = [
	{
		name: "Home",
		path: "/",
		exact: true,
		Component: Home
	},
];

export default routes