import { GET_ERR, CLEAR_ERRORS, GET_CAT, GET_BRAND } from "./type";
import axios from "axios";

export const addProd = (newProd, history) => (dispatch) => {
	dispatch(clearErrors());
	axios
		.post("http://localhost:5000/api/shop/addproduct", newProd)
		.then((res) => {
			history.push("/");
		})
		.catch((err) => {
			console.log("err", history, newProd);

			let data = [];
			if (err.response) {
				if (err.response.data.err) {
					data = Array.of({
						msg: err.response.data.err,
						param: "data invalid",
					});
				} else {
					data = err.response.data.errors;
				}
			} else {
				data = [
					{
						msg: "no connection",
						param: "please connect",
					},
				];
			}

			dispatch({
				type: GET_ERR,
				payload: data,
			});
		});
};

export const getBrands = () => (dispatch) => {
	dispatch(clearErrors());
	axios
		.get("http://localhost:5000/api/shop/allBrands")
		.then((res) =>
			dispatch({
				type: GET_BRAND,
				payload: res.data,
			}),
		)
		.catch((err) =>
			dispatch({
				type: GET_ERR,
				payload: err.response.data,
			}),
		);
};

export const getCats = () => (dispatch) => {
	dispatch(clearErrors());
	axios
		.get("http://localhost:5000/api/shop/allCategoreis")
		.then((res) =>
			dispatch({
				type: GET_CAT,
				payload: res.data,
			}),
		)
		.catch((err) =>
			dispatch({
				type: GET_ERR,
				payload: err.response.data,
			}),
		);
};

// Clear errors
export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS,
	};
};
