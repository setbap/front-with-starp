import { GET_ERR, CLEAR_ERRORS, NEW_ERR } from "../actions/type";

const initialState = {
	err: [],
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_ERR:
			return action.payload;
		case NEW_ERR:
			return action.payload;
		case CLEAR_ERRORS:
			return [];
		default:
			return state;
	}
}
