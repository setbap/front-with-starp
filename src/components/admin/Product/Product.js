import React, { Component } from "react";
import AddSpec from "./AddSpec";
// import Upload from "./Upload/Upload";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Input,
	TabContent,
	Nav,
	NavLink,
	Row,
	Col,
	Button,
	Form,
	Label,
	FormGroup
} from "reactstrap";
import cj from "../../fakeData/c.jpg";

class Product extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			price: "",
			// price: "",
			desc: "",

			color: "",
			material: "",
			category: "",
			size: "",
			brand: "",
			count: "",

			commments: [],
			spec: []
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handlePushSpec = (title, desc) => {
		// const newSpec = this.states.spec.concat({ title: "asd", desc: "asd" });
		// this.setState({
		// 	spec: newSpec
		// });
		this.setState(state => {
			const list = [...state.spec, { title, desc }];

			return {
				...state,
				spec: list
			};
		});
		console.log(this.state);
	};
	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state);
	}

	handleRemoveSpec = key => {
		const filteredItems = this.state.spec.filter(item => {
			return item !== key;
		});
		this.setState({
			spec: filteredItems
		});
	};

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<Row className="my-4">
					<Col
						lg="6"
						className="my-4 text-black shadow mx-0 px-0 pb-4  "
					>
						<Row xs="12" className="mx-0 px-0 ">
							<img
								className="d-block w-100"
								alt="product"
								src={cj}
							/>
							{/* <Upload /> */}
						</Row>
						<Row className=" p-0 m-0 mt-4 d-flex justify-content-center align-self-center row">
							<InputGroup className="px-4 py-2 my-2">
								<InputGroupAddon addonType="prepend">
									<InputGroupText>brand</InputGroupText>
								</InputGroupAddon>
								<Input
									name="brand"
									onChange={this.handleChange}
									value={this.state.brand}
								/>
							</InputGroup>
							<br />
							<InputGroup className="px-4 py-2 my-2">
								<InputGroupAddon addonType="prepend">
									<InputGroupText>Category</InputGroupText>
								</InputGroupAddon>
								<Input
									name="category"
									onChange={this.handleChange}
									value={this.state.category}
								/>
							</InputGroup>
							<br />
							<InputGroup className="px-4 py-2 my-2">
								<InputGroupAddon addonType="prepend">
									<InputGroupText>Material</InputGroupText>
								</InputGroupAddon>
								<Input
									name="material"
									onChange={this.handleChange}
									value={this.state.material}
								/>
							</InputGroup>
							<br />
							<InputGroup className="px-4 py-2 my-2">
								<InputGroupAddon addonType="prepend">
									<InputGroupText>Size</InputGroupText>
								</InputGroupAddon>
								<Input
									name="size"
									onChange={this.handleChange}
									value={this.state.size}
								/>
							</InputGroup>
							<br />
							<InputGroup className="px-4 py-2 my-2">
								<InputGroupAddon addonType="prepend">
									<InputGroupText>Color</InputGroupText>
								</InputGroupAddon>
								<Input
									name="color"
									onChange={this.handleChange}
									value={this.state.color}
								/>
							</InputGroup>
							<br />
							<InputGroup className="px-4 py-2 my-2">
								<InputGroupAddon addonType="prepend">
									<InputGroupText>count</InputGroupText>
								</InputGroupAddon>
								<Input
									name="count"
									onChange={this.handleChange}
									value={this.state.count}
								/>
							</InputGroup>
							<br />
						</Row>
					</Col>
					<Col
						lg="6"
						className="my-4 text-black shadow-sm p-4 border"
					>
						<h3>
							<InputGroup className="my-2">
								<InputGroupAddon addonType="prepend">
									<InputGroupText>Title</InputGroupText>
								</InputGroupAddon>
								<Input
									name="title"
									onChange={this.handleChange}
									value={this.state.title}
								/>
							</InputGroup>
						</h3>

						<InputGroup className="py-4">
							<InputGroupAddon addonType="prepend">
								<InputGroupText>Price</InputGroupText>
							</InputGroupAddon>
							<Input
								name="price"
								onChange={this.handleChange}
								value={this.state.price}
							/>
						</InputGroup>

						<div className=" text-justify ">
							<FormGroup>
								<Label for="desc">Descrition</Label>
								<Input
									type="textarea"
									name="desc"
									onChange={this.handleChange}
									value={this.state.desc}
									id="desc"
									rows="23"
								/>
							</FormGroup>
						</div>
					</Col>
				</Row>
				<Nav className="d-block  d-flex justify-content-center shadow my-4  ">
					<NavLink
						tag="li"
						className="page-item border-top border-bottom py-3 border-info"
					>
						AddSpec
					</NavLink>
				</Nav>
				<TabContent>
					<AddSpec />
				</TabContent>
				<Button type="submit">submit</Button>
			</Form>
		);
	}
}

Product.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.Auth,
	err: state.Err,
	items: state.SpecItem.specs
});

// const mapDispatchToProps = dispatch => {
// 	return {
// 		removeSpec: item => dispatch({ type: DELETE_SPEC, payload: item })
// 	};
// };

export default withRouter(
	connect(
		mapStateToProps
		// mapDispatchToProps
	)(Product)
);
