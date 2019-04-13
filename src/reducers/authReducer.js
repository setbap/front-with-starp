import { REG_USER, SET_USER } from "../actions/type";

const initialState = {
	isAuth: false,
	user: {}
};

export default function(state = initialState, action) {
	switch (action.type) {
		case REG_USER:
			return {
				...state,
				user: action.payload
			};
		case SET_USER:
			return {
				isAuth: action.payload ? true : false,
				user: action.payload
			};

		default:
			return state;
	}
}
