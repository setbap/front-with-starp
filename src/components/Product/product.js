import React, { Component } from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import Specification from "./ProductPart/Specification";
import Comments from "./ProductPart/Comments";
import classnames from "classnames";
import ImgDetail from "./ProductPart/ImgDetail";
import DescDetail from "./ProductPart/DescDetail";

import {
	TabContent,
	TabPane,
	Nav,
	NavLink,
	Row,
	Spinner,
	Jumbotron,
} from "reactstrap";

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
			loading: false,
			error: "",
		};
	}

	componentDidMount() {
		this.setState({
			loading: true,
		});
		const pid = this.props.match.params.pid;
		axios
			.post("http://localhost:5000/api/shop/getsingleproduct", {
				id: pid,
			})
			.then((res) => {
				this.setState({
					loading: false,
					error: "",
				});
				// console.log(res.data);
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
				// console.log(res.data);
			})
			.catch((err) => {
				this.setState({
					loading: false,
				});
				if (!err.response.status) {
					this.setState({
						error: " you have network error",
					});
				} else if (err.response.status === 422) {
					this.setState({
						error: "wrong id for product",
					});
				} else if (err.response.status === 404) {
					this.setState({
						error: "product not found",
					});
				} else {
					this.setState({
						error: "unknown err",
					});
				}
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
		let show = (
			<div className="m-5 text-center">
				<Spinner />
			</div>
		);
		if (!this.state.loading && this.state.error) {
			show = (
				<div className="mt-4 text-center text-danger">
					<Jumbotron>
						<h1 className="display-3">{this.state.error}</h1>
					</Jumbotron>
				</div>
			);
		} else if (!this.state.loading) {
			show = (
				<React.Fragment>
					<Row className="my-4">
						<ImgDetail detail={this.state} />
						<DescDetail detail={this.state} />
					</Row>
					<Nav className="d-block  d-flex justify-content-center shadow my-4  ">
						<Nav tag="li" className="page-item">
							<NavLink
								className={classnames({
									"border-top": this.state.activeTab === "1",
									"border-bottom":
										this.state.activeTab === "1",
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
									"border-bottom":
										this.state.activeTab === "2",
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
							<Comments
								items={this.state.comments}
								pid={this.props.match.params.pid}
							/>
						</TabPane>
						<TabPane tabId="2">
							<Specification items={this.state.spec} />
						</TabPane>
					</TabContent>
				</React.Fragment>
			);
		}
		return show;
	}
}
