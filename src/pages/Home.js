import React, { useEffect } from "react";
import {useDispatch} from "react-redux";
import {ACTION_TYPE} from "../redux/reducers/config";
import SSControlPanelContainer from "../ui/containers/SSControlPanelContainer";

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const fetch = async () => {
			try {
				dispatch({
					type: ACTION_TYPE.HTTP_REQUEST,
					payload: { path: "config/", method: "GET", type: ACTION_TYPE.GET_CONFIG, data: { url: "google.com", period: 5000 } }
				})
			}
			catch(e) {
				console.error(e.message)
			}
		};
		fetch();
	}, [dispatch]);

	return <SSControlPanelContainer/>
};

export default Home;