import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errReducer from "./errReducer";
import imgReducer from "./imageReducer";
import specDetailReducer from "./specDetailReducer";

export default combineReducers({
	Img: imgReducer,
	Auth: authReducer,
	Err: errReducer,
	SpecItem: specDetailReducer,
});
