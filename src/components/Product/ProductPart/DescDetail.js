import React from "react";
import { Col, Button } from "reactstrap";
const DescDetail = (props) => {
	return (
		<Col lg="6" className="my-4 text-black shadow-sm p-4">
			<h3>{props.detail.title}</h3>
			<strong>
				<div className="rounded-pill text-info shadow p-3 d-inline-block border-info h5 border">
					<span className="text-muted h5">Price : </span>
					<span>{props.detail.price}</span>
				</div>
			</strong>
			<div className=" text-justify ">
				<p className=" mb-0">{props.detail.description}</p>
			</div>
			<Button
				onClick={props.addToCart}
				disabled={props.disabled ? false : true}
				className="shadow"
				outline
				size="lg"
				color="danger"
			>
				Add to Cart
			</Button>
		</Col>
	);
};

export default DescDetail;
