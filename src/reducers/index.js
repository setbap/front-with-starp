import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errReducer from "./errReducer";
import specDetailReducer from "./specDetailReducer";

export default combineReducers({
	Auth: authReducer,
	Err: errReducer,
	SpecItem: specDetailReducer
});
