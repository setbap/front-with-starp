import React from "react";
import ReactDOM from "react-dom";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles.css";
import Navbar from "./components/MyNavbar";
import Landing from "./components/Landing";
import Main from "./components/Main";
import Signup from "./components/Singup";
import AddSpec from "./components/addSpec";

function App() {
	return (
		<Router>
			<Container>
				<Route path="/" component={Navbar} />
				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/landing" component={Landing} />
					<Route path="/signup" component={Signup} />
					<Route path="/add" component={AddSpec} />
				</Switch>
			</Container>
		</Router>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
