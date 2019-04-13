import { GET_ERR } from "../actions/type";

const initialState = {
	err: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_ERR:
			return action.payload;
		default:
			return state;
	}
}
