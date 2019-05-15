import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Specification from "./ProductPart/Specification";
import Comments from "./ProductPart/Comments";
import classnames from "classnames";
import ImgDetail from "./ProductPart/ImgDetail";
import DescDetail from "./ProductPart/DescDetail";
import { connect } from "react-redux";
import toast from "toasted-notes";

import {
	TabContent,
	TabPane,
	Nav,
	NavLink,
	Row,
	Spinner,
	Jumbotron,
} from "reactstrap";

class Product extends Component {
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
		setTimeout(() => {
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
					if (this.props.auth.isAuth) {
						// const isLike = this.state.iWant.find(item => item.userId === this.props.auth.user)
						const isLike = this.state.iWant.find(
							(item) => item.userId === this.props.auth.user.id,
						)
							? true
							: false;
						this.setState({
							like: isLike,
						});
					}
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
		}, 600);
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab,
			});
		}
	}

	ChangeLike(e) {
		const prodId = this.props.match.params.pid;
		console.log(prodId);

		axios
			.post("http://localhost:5000/api/shop/iWant", {
				prodId: prodId,
			})
			.then((res) => {
				this.setState({
					like: !this.state.like,
				});
				toast.notify(`you ${this.state.like ? "like" : "unlile"} this`);
			})
			.catch((err) => {
				if (!err.response.status) {
					toast.notify("can not connect to internet");
				} else if (err.response.status === 422) {
					toast.notify("wrong info");
				} else if (err.response.status === 404) {
					toast.notify("product not foound");
				} else {
					toast.notify("unknown err");
				}
			});
	}

	render() {
		let show = (
			<div className="m-5 text-center">
				<div>
					<Spinner type="grow" color="primary" />
					<Spinner type="grow" color="secondary" />
					<Spinner type="grow" color="success" />
					<Spinner type="grow" color="danger" />
					<Spinner type="grow" color="warning" />
					<Spinner type="grow" color="info" />
					<Spinner type="grow" color="light" />
					<Spinner type="grow" color="dark" />
				</div>
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
					<div className="my-4">
						<Breadcrumb tag="nav" listTag="div">
							<BreadcrumbItem tag="p">Ptoduct</BreadcrumbItem>
							<BreadcrumbItem tag={Link} to="#">
								{this.state.brand}
							</BreadcrumbItem>
							<BreadcrumbItem tag={Link} to="/brand">
								{this.state.category}
							</BreadcrumbItem>
							<BreadcrumbItem active tag="span">
								{this.state.title}

								<div
									onClick={() => this.ChangeLike()}
									className="d-inline ml-2"
								>
									<svg
										className={classnames("heart", {
											"heart-fill": this.state.like,
										})}
										viewBox="0 0 32 32"
									>
										<path
											d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
										/>
									</svg>
								</div>
							</BreadcrumbItem>
						</Breadcrumb>
					</div>
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

const mapStateToProps = (state) => ({
	auth: state.Auth,
	err: state.Err,
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Product);
