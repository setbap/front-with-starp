import React, { Component } from "react";
import PropTypes from "prop-types";
import Specification from "./Specification";
import Comments from "./Comments";
import classnames from "classnames";

import {
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Row,
	Col,
	Button
} from "reactstrap";
import cj from "../fakeData/c.jpg";

export default class Product extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: "1"
		};
	}
	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
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
							<img className="d-block w-100" src={cj} />
						</Row>
						<Row className=" p-0 m-0 mt-4 d-flex justify-content-center align-self-center row">
							<strong>
								<div className="border-info rounded-pill text-muted shadow-sm p-3 d-inline-block  h5 border">
									<span className=" h5">Color : </span>
									<span>Red</span>
								</div>
							</strong>
							<strong>
								<div className="border-info rounded-pill text-muted shadow-sm p-3 d-inline-block  h5 border">
									<span className=" h5">Material : </span>
									<span>cattan</span>
								</div>
							</strong>
							<strong>
								<div className="border-info rounded-pill text-muted shadow-sm p-3 d-inline-block  h5 border">
									<span className=" h5">category : </span>
									<span>dress</span>
								</div>
							</strong>
							<strong>
								<div className="border-info rounded-pill text-muted shadow-sm p-3 d-inline-block  h5 border">
									<span className=" h5">Brand : </span>
									<span>irancattan</span>
								</div>
							</strong>

							<strong>
								<div className="rounded-pill border-info text-muted shadow-sm p-3 d-inline-block  h5 border">
									<span className=" h5">Size : </span>
									<span>xl</span>
								</div>
							</strong>
						</Row>
					</Col>
					<Col lg="6" className="my-4 text-black shadow-sm p-4">
						<h3>Young Man Wearing Clothe</h3>
						<strong>
							<div className="rounded-pill text-info shadow p-3 d-inline-block border-info h5 border">
								<span className="text-muted h5">Price : </span>
								<span>$120.00</span>
							</div>
						</strong>
						<div class=" text-justify ">
							<p className=" mb-0">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Alias commodi eveniet tempora,
								obcaecati doloribus provident
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Cum, quasi adipisci, magnam
								voluptatem, earum explicabo natus sit placeat
								modi fuga ipsum tempora officia officiis neque
								rem est iste distinctio laboriosam quod
								expedita. Quis nihil suscipit iure enim,
								officiis ex facilis cumque eveniet quo. Tempora
								officiis nostrum neque officia rerum sit
								sapiente quidem molestias ipsa amet laborum
								soluta voluptatibus sint accusamus facilis quia
								velit culpa, maiores natus in dignissimos.
								Cumque placeat obcaecati ducimus assumenda
								reprehenderit labore similique nam veniam rem
								dolores?
							</p>
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
								"border-info": 1
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
							className="page-item"
							className={classnames({
								"border-top": this.state.activeTab === "2",
								"border-bottom": this.state.activeTab === "2",
								"py-3": 1,
								"border-info": 1
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
						<Comments />
						<Comments />
						<Comments />
						<Comments />
					</TabPane>
					<TabPane tabId="2">
						<Specification />
					</TabPane>
				</TabContent>
			</React.Fragment>
		);
	}
}
