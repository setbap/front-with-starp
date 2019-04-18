import React from "react";
import ErrModal from "../error/ErrorModal";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { validate_email } from "../../actions/authActions";
import { withRouter } from "react-router-dom";
class ValidateEmail extends React.Component {
	constructor() {
		super();
		this.state = {
			userId: "",
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
			userId: this.state.userId
		};
		this.props.validate_email(id, this.props.history);
	}
	render() {
		// const { user } = this.props.auth;
		const { errors } = this.state;
		return (
			<React.Fragment>
				<p className="display-4 m-3"> Validate Email </p>
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
						<Label for="id">User Id</Label>
						<Input
							onChange={this.handleChange}
							value={this.state.userId}
							type="text"
							name="userId"
							id="id"
							placeholder="inter your id"
						/>
					</FormGroup>

					<Button className="mt-1">Submit</Button>
				</Form>
			</React.Fragment>
		);
	}
}

ValidateEmail.propTypes = {
	validate_email: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.Auth,
	err: state.Err
});

export default withRouter(
	connect(
		mapStateToProps,
		{ validate_email }
	)(ValidateEmail)
);
