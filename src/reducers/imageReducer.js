import { ADD_IMG, DELETE_IMG } from "../actions/type";

const initialState = {
	imgs: [],
};

export default function(state = initialState, action) {
	switch (action.type) {
		case ADD_IMG:
			// console.log(action);

			const list = state.imgs.concat(action.payload);
			console.log(state);

			return {
				...state,
				imgs: list,
			};
		case DELETE_IMG:
			const newArray = state.imgs.filter((item) => {
				return item !== action.payload;
			});
			return {
				...state,
				imgs: newArray,
			};
		default:
			return state;
	}
}
