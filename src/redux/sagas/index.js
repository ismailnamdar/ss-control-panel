import { call, put, takeEvery } from 'redux-saga/effects'
import { API_BASE_URL } from '../../configs/constants'
import axios from 'axios';

const _axios = axios.create({
	baseURL: API_BASE_URL,
	timeout: 10000,
	responseType: 'json'
});
// worker Saga: will be fired on HTTP_REQUEST actions
function* fetch(action) {
	const { method, params, path, data, type, actionData } = action.payload;
	try {
		const { data: _data } = yield call(_axios,  {
			method,
			params,
			data,
			url: path,
		});
		yield put({type: type + "_SUCCEEDED", payload: { data: _data, actionData }});
	} catch (e) {
		yield put({type: type + "_FAILED", payload: {message: e.message, actionData}});
	}
}

/*
  Starts fetchUser on each dispatched `HTTP_REQUEST` action.
  Allows concurrent fetches of user.
*/
function* watcher() {
	yield takeEvery("HTTP_REQUEST", fetch);
}

export default watcher;