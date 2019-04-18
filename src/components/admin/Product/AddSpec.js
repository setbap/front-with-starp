import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Item from "./Item";
export default class Example extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			detaile: [],
			name: "",
			desc: ""
		};

		// this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();

		this.props.adds(this.state.name, this.state.desc);
		this.setState(state => {
			// const list = state.detaile.concat(newUser);

			return {
				// ...this.state,
				// detaile: list,
				name: "",
				desc: ""
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
				<Item
					entries={this.props.items}
					deleteItem={this.props.remove}
				/>
				<Form onSubmit={this.handleSubmit} className="p-3 mt-3 border">
					<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
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
					</FormGroup>
					<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
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
					</FormGroup>
					<Button className="btn mt-3">add</Button>
				</Form>
			</React.Fragment>
		);
	}
}
