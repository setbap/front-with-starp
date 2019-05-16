import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	CardLink,
	Row,
	Col,
	CardImg,
	CardImgOverlay,
} from "reactstrap";

export class ProductList extends Component {
	render() {
		const card = (
			<Col
				xs={{ size: 10, offset: 1 }}
				className="my-3 "
				md="4"
				lg="3"
				sm={{ size: 6, offset: 0 }}
			>
				<Card>
					{/* <CardBody>
						<CardTitle>Card title</CardTitle>
						<CardSubtitle>Card subtitle</CardSubtitle>
					</CardBody> */}
					<img
						width="100%"
						src="https://via.placeholder.com/100?text=Visit+Blogging.com+Now"
						alt="Card image cap"
					/>
					<CardBody>
						<CardText>
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</CardText>
						<CardLink href="#">Card Link</CardLink>
						<CardLink href="#">Another Link</CardLink>
					</CardBody>
				</Card>
			</Col>
		);

		const card2 = (
			<Col
				xs={{ size: 10, offset: 1 }}
				className="my-3 mx-auto"
				md="4"
				lg="3"
				sm="6"
			>
				<Card inverse>
					<CardImg
						width="100%"
						src="https://via.placeholder.com/100?text=Visit+Blogging.com+Now"
						alt="Card image cap"
					/>
					<CardImgOverlay>
						<CardTitle>Card Title</CardTitle>
						<CardText>
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This content
							is a little bit longer.
						</CardText>
						<CardText>
							<small className="text-muted">
								Last updated 3 mins ago
							</small>
						</CardText>
					</CardImgOverlay>
				</Card>
			</Col>
		);
		return (
			<div>
				<Row>
					{card}
					{card}
					{card}
					{card}
					{card}
					{card}
					{card}

					{card2}
					{card2}
				</Row>
			</div>
		);
	}
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ProductList);
