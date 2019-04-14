import React from "react";
import ErrModal from "../error/ErrorModal";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reguser } from "../../actions/authActions";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Signup extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			password: "",
			passwordconfrim: "",
			errors: [],
			modal: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleErr = this.handleErr.bind(this);
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}

	componentWillReceiveProps(newProps) {
		console.log("in");

		if (newProps.err) {
			this.setState({
				errors: newProps.err
			});
		}
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	handleErr(e) {
		this.setState({
			errors: []
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			passwordconfrim: this.state.passwordconfrim
		};
		this.props.reguser(newUser, this.props.history);
	}
	render() {
		const { user } = this.props.auth;
		const { errors } = this.state;
		return (
			<React.Fragment>
				<p className="display-4 m-3"> Signup </p>
				<ErrModal
					numberErr={this.state.errors.length}
					handleErr={this.handleErr}
					className=""
					data={errors}
				/>
				<Form
					onSubmit={this.handleSubmit}
					className="container mt-3 p-3 rounded border"
				>
					<FormGroup>
						<Label for="Name">Name</Label>
						<Input
							onChange={this.handleChange}
							value={this.state.name}
							type="text"
							name="name"
							id="Name"
							placeholder="inter your name"
						/>
					</FormGroup>
					<FormGroup>
						<Label for="email">Email</Label>
						<Input
							onChange={this.handleChange}
							value={this.state.email}
							type="email"
							name="email"
							id="email"
							placeholder="your own email"
						/>
					</FormGroup>
					<FormGroup>
						<Label for="Password">Password</Label>
						<Input
							onChange={this.handleChange}
							value={this.state.password}
							type="password"
							name="password"
							id="Password"
							placeholder="password 5 char and contain 1 number"
						/>
					</FormGroup>
					<FormGroup>
						<Label for="Confrim Password">Confrim Password</Label>
						<Input
							onChange={this.handleChange}
							value={this.state.passwordconfrim}
							type="password"
							name="passwordconfrim"
							id="Confrim Password"
							placeholder="password Confrim"
						/>
					</FormGroup>
					<Button className="mt-1">Submit</Button>
				</Form>
				<Link to="/signup/validate-email">
					Have id to verfy <span>Click Here</span>
				</Link>

				<Link to="/forget-password">
					Have id to verfy <span>Click Here</span>
				</Link>
			</React.Fragment>
		);
	}
}

Signup.propTypes = {
	reguser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.Auth,
	err: state.Err
});

export default withRouter(
	connect(
		mapStateToProps,
		{ reguser }
	)(Signup)
);
