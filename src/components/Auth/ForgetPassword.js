import React from "react";
import ErrModal from "../error/ErrorModal";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { forget_pass } from "../../actions/authActions";
import { withRouter, Link } from "react-router-dom";
class ForgetPassword extends React.Component {
	constructor() {
		super();
		this.state = {
			email: "",
			errors: []
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleErr = this.handleErr.bind(this);
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
		const id = {
			email: this.state.email
		};
		this.props.forget_pass(id, this.props.history);
	}
	render() {
		// const { user } = 	this.props.auth;
		const { errors } = this.state;
		return (
			<React.Fragment>
				<p className="display-4 m-3"> Forget Password </p>
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
						<Label for="id">Email</Label>
						<Input
							onChange={this.handleChange}
							type="Email"
							name="email"
							id="id"
							placeholder="your logged email"
						/>
					</FormGroup>

					<Button className="mt-1">Submit</Button>
				</Form>
				<Link to="/forget-password/reset-pass">
					have id <span>Click Here</span>
				</Link>
			</React.Fragment>
		);
	}
}

ForgetPassword.propTypes = {
	forget_pass: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.Auth,
	err: state.Err
});

export default withRouter(
	connect(
		mapStateToProps,
		{ forget_pass }
	)(ForgetPassword)
);
