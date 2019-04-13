import { GET_ERR, SET_USER } from "./type";
import axios from "axios";
import jwtToken from "jwt-decode";
import stth from "../util/setTokenToHeader";

export const reguser = (newUser, history) => dispatch => {
	axios
		.post("http://localhost:5000/api/user/register", newUser)
		.then(res => {
			history.push("/login");
		})
		.catch(err => {
			let data = [];
			if (err.response.data.err) {
				data = Array.of({
					msg: err.response.data.err,
					param: "data invalid"
				});
			} else {
				data = err.response.data.errors;
			}

			dispatch({
				type: GET_ERR,
				payload: data
			});
		});
};

export const loginuser = data => dispatch => {
	axios
		.post("http://localhost:5000/api/user/login", data)
		.then(res => {
			let { secret } = res.data;
			localStorage.setItem("jwtToken", secret);
			stth(secret);
			const user = jwtToken(secret);
			dispatch({
				type: SET_USER,
				payload: user
			});
		})
		.catch(err => {
			let data = [];
			if (err.response.data.err) {
				data = Array.of({
					msg: err.response.data.err,
					param: "data invalid"
				});
			} else {
				data = err.response.data.errors;
			}
			console.log("sinaaa", data);
			dispatch({
				type: GET_ERR,
				payload: data
			});
		});
};

export const logoutuser = data => dispatch => {
	stth(false);
	localStorage.removeItem("jwtToken");
	dispatch({
		type: SET_USER,
		payload: ""
	});
};
