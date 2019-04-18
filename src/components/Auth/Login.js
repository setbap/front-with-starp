import React, { Component } from "react";
import { loginuser } from "../../actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import ErrModal from "../error/ErrorModal";

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			errors: []
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleErr = this.handleErr.bind(this);
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

	componentWillReceiveProps(newProps) {
		if (newProps.auth.isAuth) {
			this.props.history.push("/");
		}

		if (newProps.err) {
			this.setState({
				errors: newProps.err
			});
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = {
			email: this.state.email,
			password: this.state.password
		};
		console.log("done");

		this.props.loginuser(user);
	}

	render() {
		// const { user } = this.props.auth;
		const { errors } = this.state;
		return (
			<React.Fragment>
				<p className="display-4 m-3"> Login </p>
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
						<Label for="email">Email</Label>
						<Input
							onChange={this.handleChange}
							value={this.state.pasword}
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
							value={this.state.pasword}
							type="password"
							name="password"
							id="Password"
							placeholder="password 5 char and contain 1 number"
						/>
					</FormGroup>
					<Button className="mt-1">Submit</Button>
				</Form>
				<Link to="/signup">
					Not account <span>Click Here</span>
				</Link>
			</React.Fragment>
		);
	}
}
Login.propTypes = {
	loginuser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.Auth,
	err: state.Err
});

export default connect(
	mapStateToProps,
	{ loginuser }
)(Login);
