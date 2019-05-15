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
			<Button className="shadow" outline size="lg" color="danger">
				Add to Cart
			</Button>
			<div className="d-inline ml-2">
				<svg className="heart" viewBox="0 0 32 32">
					<path
						d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
					/>
				</svg>
			</div>
		</Col>
	);
};

export default DescDetail;
