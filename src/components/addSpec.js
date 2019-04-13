import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Item from "./Item";
export default class Example extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			detaile: [],
			name: "",
			title: ""
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const newUser = {
			name: this.state.name,
			title: this.state.title
		};
		this.setState(state => {
			const list = state.detaile.concat(newUser);

			return {
				...this.state,
				detaile: list,
				name: "",
				title: ""
			};
		});
	};

	remove = key => {
		const filteredItems = this.state.detaile.filter(item => {
			return item !== key;
		});
		this.setState({
			detaile: filteredItems
		});
	};

	render() {
		return (
			<Form onSubmit={this.handleSubmit} className="mt-4 ml-4">
				<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
					<Item
						entries={this.state.detaile}
						deleteItem={this.remove}
					/>

					<Label for="title" className="mr-sm-2">
						Title
					</Label>
					<Input
						onChange={this.handleChange}
						value={this.state.title}
						type="text"
						name="title"
						id="title"
						placeholder="text"
					/>
				</FormGroup>
				<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
					<Label for="desc" className="mr-sm-2">
						desc
					</Label>
					<Input
						type="text"
						onChange={this.handleChange}
						value={this.state.name}
						name="name"
						id="desc"
						placeholder="desc"
					/>
				</FormGroup>
				<Button className="btn mt-3">add</Button>
			</Form>
		);
	}
}
