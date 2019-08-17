const initialState = {
	data: [],
	dataMapById: {},
	loading: false
};

export const ACTION_TYPE = {
	HTTP_REQUEST: 'HTTP_REQUEST',
	CONFIG: 'CONFIG',
	CONFIG_READ: 'CONFIG_READ',
	CONFIG_DELETE: 'CONFIG_DELETE',
	CONFIG_CREATE: 'CONFIG_CREATE'
};

const CRUD = ["CREATE", "READ", "UPDATE", "DELETE"];
const generateCRUD = (name) => {
	CRUD.forEach((operation) => {
		const action = name + "_" + operation;
		const success = name + "_" + operation + "_SUCCEEDED";
		const fail = name + "_" + operation + "_FAILED";
		ACTION_TYPE[action] = action;
		ACTION_TYPE[success] = success;
		ACTION_TYPE[fail] = fail;
	})
};

generateCRUD(ACTION_TYPE.CONFIG);

export default function config(state = initialState, action) {
	if(action.type === ACTION_TYPE.HTTP_REQUEST) {
		return {
			...state,
			loading: true
		};
	}
	else if(action.type === ACTION_TYPE["CONFIG_READ_SUCCEEDED"]) {
		const { data } = action.payload;
		return {
			...state,
			data,
			dataMapById: data.reduce((acc, elem) => {
				acc[elem["_id"]] = elem;
				return acc;
			}, {}),
			loading: false
		}
	}
	else if(action.type === ACTION_TYPE["CONFIG_READ_FAILED"]) {
		return {
			...state,
			loading: false
		};
	}
	else if(action.type === ACTION_TYPE["CONFIG_DELETE_SUCCEEDED"]) {
		const { data, actionData } = action.payload;
		const newData = data.filter(({ _id }) => _id !== actionData._id);
		const newDataMapById = state.dataMapById;
		delete newDataMapById[actionData._id];
		return {
			...state,
			data: newData,
			dataMapById: newDataMapById,
			loading: false
		};
	}
	else if(action.type === ACTION_TYPE["CONFIG_DELETE_FAILED"]) {
		return {
			...state,
			loading: false
		};
	}
	else if(action.type === ACTION_TYPE["CONFIG_CREATE_SUCCEEDED"]) {
		const { data } = action.payload;
		return {
			...state,
			data: [...state.data, data],
			dataMapById: {
				...state.dataMapById,
				[data._id]: data
			},
			loading: false
		};
	}
	else if(action.type === ACTION_TYPE["CONFIG_CREATE_FAILED"]) {
		return {
			...state,
			loading: false
		};
	}
	else {
		return state;
	}
}