import React from "react";
import ReactDOM from "react-dom";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/MyNavbar";
import Landing from "./components/Landing";
import Main from "./components/Main";
import Signup from "./components/Auth/Singup";
import Login from "./components/Auth/Login";
import AddSpec from "./components/addSpec";
import { Provider } from "react-redux";
import store from "./store";
import jwtToken from "jwt-decode";
import { SET_USER } from "./actions/type";
import stth from "./util/setTokenToHeader";
import { logoutuser } from "./actions/authActions";

if (localStorage.jwtToken) {
	const secret = localStorage.jwtToken;
	const user = jwtToken(secret);
	stth(secret);
	store.dispatch({
		type: SET_USER,
		payload: user
	});
	const exp = Date.now() / 1000;
	if (exp > user.exp) {
		store.dispatch(logoutuser());
		window.location.href = "/login";
	}
}

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Route path="/" component={Navbar} />
				<Container>
					<Switch>
						<Route exact path="/" component={Main} />
						<Route path="/landing" component={Landing} />
						<Route path="/signup" component={Signup} />
						<Route path="/login" component={Login} />
						<Route path="/add" component={AddSpec} />
					</Switch>
				</Container>
			</Router>
		</Provider>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
