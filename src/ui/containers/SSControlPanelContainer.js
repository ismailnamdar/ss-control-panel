import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {ACTION_TYPE} from "../../redux/reducers/config";
import SSControlPanel from "../components/SSControlPanel";

const SSControlPanelContainer = () => {
	const dispatch = useDispatch();
	const { data, dataMapById } = useSelector(state => ({data: state.config.data, dataMapById: state.config.dataMapById}));
	const handleRead = useCallback(async () => {
		try {
			dispatch({
				type: ACTION_TYPE.HTTP_REQUEST,
				payload: {
					path: "config/",
					method: "GET",
					type: ACTION_TYPE.CONFIG_READ,
					data: {}
				}
			})
		}
		catch(e) {
			console.error(e.message)
		}
	}, [dispatch]);
	// data = { url: "google.com", period: 5000 }
	const handleCreate = useCallback(async (data) => {
		try {
			dispatch({
				type: ACTION_TYPE.HTTP_REQUEST,
				payload: {
					path: "config/",
					method: "POST",
					type: ACTION_TYPE.CONFIG_CREATE,
					data
				}
			})
		}
		catch(e) {
			console.error(e.message)
		}
	}, [dispatch]);
	const handleDelete = useCallback(async (id) => {
		try {
			dispatch({
				type: ACTION_TYPE.HTTP_REQUEST,
				payload: {
					path: "config/",
					method: "DELETE",
					type: ACTION_TYPE.CONFIG_DELETE,
					data: { id }
				}
			})
		}
		catch(e) {
			console.error(e.message)
		}
	}, [dispatch]);
	const handleUpdate = useCallback(() => {
		// TODO: init this function
	}, []);
	return <SSControlPanel data={data} dataMapById={dataMapById} onCreate={handleCreate} onRead={handleRead} onUpdate={handleUpdate} onDelete={handleDelete}/>
};

export default SSControlPanelContainer;