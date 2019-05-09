import React, { Component } from "react";
import AddSpec from "./AddSpec";
import Upload from "./Upload/Upload";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import ErrModal from "../../error/ErrorModal";
import axios from "axios";
import Select from "react-select";

import { addProd } from "../../../actions/prodActions";
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
	FormGroup,
} from "reactstrap";

class Product extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			price: "",
			description: "",

			color: "",
			material: "",
			category: "",
			size: "",
			brand: "",
			count: "",

			commments: [],
			spec: [],
			errors: [],
			myBrands: [],
			myCats: [],
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleErr = this.handleErr.bind(this);
	}
	componentDidMount() {
		axios.get("http://localhost:5000/api/shop/allBrands").then((res) => {
			let myopt = res.data.brands.map((item) => {
				return { value: item._id, label: item.name };
			});
			this.setState({
				myBrands: myopt,
			});
		});

		axios
			.get("http://localhost:5000/api/shop/allCategoreis")
			.then((res) => {
				let myopt = res.data.cat.map((item) => {
					return { value: item._id, label: item.name };
				});
				this.setState({
					myCats: myopt,
				});
			});
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleChangeSelectB = (selectedOption) => {
		this.setState({ brand: selectedOption.value, bs: selectedOption });
	};
	handleChangeSelectC = (selectedOption) => {
		this.setState({ category: selectedOption.value, cs: selectedOption });
	};

	handleSubmit(e) {
		e.preventDefault();
		this.props.addProd(
			{
				...this.state,
				spec: this.props.items,
				imageUrl: this.props.imgs[0],
			},
			this.props.history,
		);
	}

	handleErr(e) {
		this.setState({
			errors: [],
		});
	}

	componentWillReceiveProps(newProps) {
		if (newProps.err) {
			this.setState({
				errors: newProps.err,
			});
		}
	}
	render() {
		const { errors, myBrands, myCats } = this.state;

		return (
			<Form onSubmit={this.handleSubmit}>
				<ErrModal
					numberErr={this.state.errors.length}
					handleErr={this.handleErr}
					className=""
					data={errors}
				/>
				<Row className="my-4">
					<Col
						lg="6"
						className="my-4 text-black shadow mx-0 px-0 pb-4  "
					>
						<Row xs="12" className="mx-0 px-0 ">
							<Upload />
						</Row>
						<Row className=" p-0 m-0 mt-4 d-flex justify-content-center align-self-center row">
							<InputGroup className="px-4 py-2 my-2">
								{/* <InputGroupAddon addonType="prepend">
									<InputGroupText>brand</InputGroupText>
								</InputGroupAddon> */}

								{myBrands.length ? (
									<Select
										className="w-100"
										placeholder="select brand"
										name="brand"
										value={this.state.bs}
										onChange={this.handleChangeSelectB}
										options={myBrands}
									/>
								) : (
									""
								)}
							</InputGroup>

							<InputGroup className="px-4 py-2 my-2">
								{myCats.length ? (
									<Select
										className="w-100"
										placeholder="select category"
										value={this.state.cs}
										name="category"
										onChange={this.handleChangeSelectC}
										options={myCats}
									/>
								) : (
									""
								)}
							</InputGroup>

							{/* <InputGroup className="px-4 py-2 my-2">
								<InputGroupAddon addonType="prepend">
									<InputGroupText>Category</InputGroupText>
								</InputGroupAddon>
								<Input
									name="category"
									onChange={this.handleChange}
									value={this.state.category}
								/>
							</InputGroup> */}
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
								<Label for="description">description</Label>
								<Input
									type="textarea"
									name="description"
									onChange={this.handleChange}
									value={this.state.description}
									id="description"
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
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.Auth,
	err: state.Err,
	items: state.SpecItem.specs,
	imgs: state.Img.imgs,
});

// const mapDispatchToProps = dispatch => {
// 	return {
// 		removeSpec: item => dispatch({ type: DELETE_SPEC, payload: item })
// 	};
// };

export default connect(
	mapStateToProps,
	{ addProd },
)(withRouter(Product));
