import { ADD_SPEC, DELETE_SPEC } from "../actions/type";

const initialState = {
	specs: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case ADD_SPEC:
			// console.log(action);

			const list = state.specs.concat(action.payload);
			console.log(state);

			return {
				...state,
				specs: list
			};
		case DELETE_SPEC:
			const newArray = state.specs.filter(item => {
				return item !== action.payload;
			});
			return {
				...state,
				specs: newArray
			};
		default:
			return state;
	}
}
