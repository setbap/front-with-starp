import React from "react";
import ReactDOM from "react-dom";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/MyNavbar";
import Landing from "./components/Landing";
// import Main from "./components/Main";
// import NewProduct from "./components/admin/Product/Product";
import Signup from "./components/Auth/Singup";
import ValidateEmail from "./components/Auth/ValidateEmail";
import ForgetPassword from "./components/Auth/ForgetPassword";
import ChangePassword from "./components/Auth/ChangePassword";
import Product from "./components/Product/product";
import ProductList from "./components/productList/ProductList";

import "toasted-notes/src/styles.css";

import Login from "./components/Auth/Login";
import AddSpec from "./components/admin/Product/AddSpec";
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
		payload: user,
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
						{/* <Route exact path="/" component={Main} /> */}
						{/* <Route exact path="/" component={NewProduct} /> */}
						<Route exact path="/" component={ProductList} />
						<Route exact path="/product/:pid" component={Product} />
						<Route exact path="/landing" component={Landing} />
						<Route exact path="/signup" component={Signup} />
						<Route
							exact
							path="/signup/validate-email"
							component={ValidateEmail}
						/>
						<Route
							exact
							path="/forget-password"
							component={ForgetPassword}
						/>
						<Route
							exact
							path="/forget-password/reset-pass"
							component={ChangePassword}
						/>
						<Route exact path="/login" component={Login} />
						<Route exact path="/add" component={AddSpec} />
					</Switch>
				</Container>
			</Router>
		</Provider>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
