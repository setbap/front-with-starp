import React from "react";
import { Button, Label, Input } from "reactstrap";
import Item from "./Item";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ADD_SPEC } from "../../../actions/type";
import PropTypes from "prop-types";

class AddSpec extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// detaile: [],
			name: "",
			desc: "",
		};

		// this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmitSpec = (e) => {
		e.preventDefault();

		this.props.adder(this.state.name, this.state.desc);
		this.setState((state) => {
			// const list = state.detaile.concat(newUser);

			return {
				// ...this.state,
				// detaile: list,
				name: "",
				desc: "",
			};
		});
	};

	// remove = key => {
	// 	const filteredItems = this.state.detaile.filter(item => {
	// 		return item !== key;
	// 	});
	// 	this.setState({
	// 		detaile: filteredItems
	// 	});
	// };

	render() {
		return (
			<React.Fragment>
				<Item />

				<div className="p-3 mt-3 border">
					<div className="mb-2 mr-sm-2 mb-sm-0">
						<Label for="name" className="mr-sm-2">
							name
						</Label>
						<Input
							type="text"
							onChange={this.handleChange}
							value={this.state.name}
							name="name"
							id="name"
							placeholder="name"
						/>
					</div>

					<div className="mb-2 mr-sm-2 mb-sm-0">
						<Label for="desc" className="mr-sm-2">
							desc
						</Label>
						<Input
							onChange={this.handleChange}
							value={this.state.desc}
							type="text"
							name="desc"
							id="desc"
							placeholder="text"
						/>
					</div>

					<Button
						onClick={this.handleSubmitSpec}
						className="btn mt-3"
					>
						add
					</Button>
				</div>
			</React.Fragment>
		);
	}
}
AddSpec.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.Auth,
	err: state.Err,
});

const mapDispatchToProps = (dispatch) => {
	return {
		adder: (name, desc) =>
			dispatch({ type: ADD_SPEC, payload: { name, desc } }),
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(AddSpec),
);
