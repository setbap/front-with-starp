import { GET_ERR, CLEAR_ERRORS } from "../actions/type";

const initialState = {
	err: [],
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_ERR:
			return action.payload;
		case CLEAR_ERRORS:
			return [];
		default:
			return state;
	}
}
