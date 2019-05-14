import React, { Component } from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import Specification from "./Specification";
import Comments from "./Comments";
import classnames from "classnames";

import {
	TabContent,
	TabPane,
	Nav,
	NavLink,
	Row,
	Col,
	Button,
} from "reactstrap";
import cj from "../fakeData/c.jpg";

export default class Product extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: "1",
			imgUrl: "",
			material: "",
			category: "",
			brand: "",
			size: "",
			title: "",
			price: 0,
			description: "",
			comments: [],
			spec: [],
			iWant: [],
		};
	}

	componentDidMount() {
		const pid = this.props.match.params.pid;
		axios
			.post("http://localhost:5000/api/shop/getsingleproduct", {
				id: pid,
			})
			.then((res) => {
				// let myopt = res.data.cat.map((item) => {
				// 	return { value: item._id, label: item.name };
				// });
				// const [
				// 	imageUrl,
				// 	material,
				// 	category,
				// 	brand,
				// 	size,
				// 	price,
				// 	title,
				// 	comments,
				// 	spec,
				// 	description,
				// ] = res.data;
				console.log(res.data);
				this.setState({
					imgUrl: res.data.imageUrl,
					material: res.data.material,
					category: res.data.category.name,
					brand: res.data.brand.name,
					size: res.data.size,
					title: res.data.title,
					price: res.data.price,
					description: res.data.description,
					comments: res.data.comments,
					spec: res.data.spec,
					iWant: res.data.iWant,
				});
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab,
			});
		}
	}
	render() {
		return (
			<React.Fragment>
				<Row className="my-4">
					<Col
						lg="6"
						className="my-4 text-black shadow mx-0 px-0 pb-4  "
					>
						<Row xs="12" className="mx-0 px-0 ">
							<img
								className="d-block w-100"
								alt="hello"
								src={this.state.imgUrl}
							/>
						</Row>
						<Row className=" p-0 m-0 mt-4 d-flex justify-content-center align-self-center row">
							<strong>
								<div className="border-info rounded-pill text-muted shadow-sm p-3 d-inline-block  h5 border">
									<span className=" h5">Color : </span>
									<span>{this.state.color}</span>
								</div>
							</strong>
							<strong>
								<div className="border-info rounded-pill text-muted shadow-sm p-3 d-inline-block  h5 border">
									<span className=" h5">Material : </span>
									<span>{this.state.material}</span>
								</div>
							</strong>
							<strong>
								<div className="border-info rounded-pill text-muted shadow-sm p-3 d-inline-block  h5 border">
									<span className=" h5">category : </span>
									<span>{this.state.category}</span>
								</div>
							</strong>
							<strong>
								<div className="border-info rounded-pill text-muted shadow-sm p-3 d-inline-block  h5 border">
									<span className=" h5">Brand : </span>
									<span>{this.state.brand}</span>
								</div>
							</strong>

							<strong>
								<div className="rounded-pill border-info text-muted shadow-sm p-3 d-inline-block  h5 border">
									<span className=" h5">Size : </span>
									<span>{this.state.size}</span>
								</div>
							</strong>
						</Row>
					</Col>
					<Col lg="6" className="my-4 text-black shadow-sm p-4">
						<h3>{this.state.title}</h3>
						<strong>
							<div className="rounded-pill text-info shadow p-3 d-inline-block border-info h5 border">
								<span className="text-muted h5">Price : </span>
								<span>{this.state.price}</span>
							</div>
						</strong>
						<div className=" text-justify ">
							<p className=" mb-0">{this.state.description}</p>
						</div>
						<Button
							className="shadow"
							outline
							size="lg"
							color="danger"
						>
							Add to Cart
						</Button>
					</Col>
				</Row>
				<Nav className="d-block  d-flex justify-content-center shadow my-4  ">
					<Nav tag="li" className="page-item">
						<NavLink
							className={classnames({
								"border-top": this.state.activeTab === "1",
								"border-bottom": this.state.activeTab === "1",
								"py-3": 1,
								"border-info": 1,
							})}
							onClick={() => {
								this.toggle("1");
							}}
						>
							Comments
						</NavLink>
					</Nav>
					<Nav color="danger">
						<NavLink
							tag="li"
							className={classnames({
								"border-top": this.state.activeTab === "2",
								"border-bottom": this.state.activeTab === "2",
								"py-3": 1,
								"border-info": 1,
								"page-item": 1,
							})}
							onClick={() => {
								this.toggle("2");
							}}
						>
							Specification
						</NavLink>
					</Nav>
				</Nav>
				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="1">
						<Comments items={this.state.comments} />
					</TabPane>
					<TabPane tabId="2">
						<Specification items={this.state.spec} />
					</TabPane>
				</TabContent>
			</React.Fragment>
		);
	}
}
