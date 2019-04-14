import { GET_ERR, SET_USER } from "./type";
import axios from "axios";
import jwtToken from "jwt-decode";
import stth from "../util/setTokenToHeader";

export const reguser = (newUser, history) => dispatch => {
	axios
		.post("http://localhost:5000/api/user/register", newUser)
		.then(res => {
			history.push("/signup/validate-email");
		})
		.catch(err => {
			let data = [];
			if (err.response) {
				if (err.response.data.err) {
					data = Array.of({
						msg: err.response.data.err,
						param: "data invalid"
					});
				} else {
					data = err.response.data.errors;
				}
			} else {
				data = [
					{
						msg: "no connection",
						param: "please connect"
					}
				];
			}

			dispatch({
				type: GET_ERR,
				payload: data
			});
		});
};

export const validate_email = (id, history) => dispatch => {
	axios
		.post("http://localhost:5000/api/user/register/validate", id)
		.then(res => {
			history.push("/login");
		})
		.catch(err => {
			let data = [];
			if (err.response) {
				if (err.response.data.err) {
					data = Array.of({
						msg: err.response.data.err,
						param: "data invalid"
					});
				} else {
					data = err.response.data.errors;
				}
			} else {
				data = [
					{
						msg: "no connection",
						param: "please connect"
					}
				];
			}

			dispatch({
				type: GET_ERR,
				payload: data
			});
		});
};

export const forget_pass = (email, history) => dispatch => {
	axios
		.post("http://localhost:5000/api/user/register/reset-password", email)
		.then(res => {
			history.push("forget-password/reset-pass");
		})
		.catch(err => {
			let data = [];
			if (err.response) {
				if (err.response.data.err) {
					data = Array.of({
						msg: err.response.data.err,
						param: "data invalid"
					});
				} else {
					data = err.response.data.errors;
				}
			} else {
				data = [
					{
						msg: "no connection",
						param: "please connect"
					}
				];
			}

			dispatch({
				type: GET_ERR,
				payload: data
			});
		});
};

export const new_pass = (data, history) => dispatch => {
	axios
		.post(
			"http://localhost:5000/api/user/register/reset-password/new-password",
			data
		)
		.then(res => {
			history.push("/login");
		})
		.catch(err => {
			let data = [];
			if (err.response) {
				if (err.response.data.err) {
					data = Array.of({
						msg: err.response.data.err,
						param: "data invalid"
					});
				} else {
					data = err.response.data.errors;
				}
			} else {
				data = [
					{
						msg: "no connection",
						param: "please connect"
					}
				];
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
			if (err.response) {
				if (err.response.data.err) {
					data = Array.of({
						msg: err.response.data.err,
						param: "data invalid"
					});
				} else {
					data = err.response.data.errors;
				}
			} else {
				data = [
					{
						msg: "no connection",
						param: "please connect"
					}
				];
			}

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
