import React from "react";
import { Row, Col } from "reactstrap";
function ImgDetail(props) {
	return (
		<Col lg="6" className="my-4 text-black shadow mx-0 px-0 pb-4  ">
			<Row xs="12" className="mx-0 px-0 ">
				<img
					className="d-block w-100"
					alt="hello"
					src={props.detail.imgUrl}
				/>
			</Row>
			<Row className=" p-0 m-0 mt-4 d-flex justify-content-center align-self-center row">
				<strong>
					<div className="border-info rounded-pill text-muted shadow-sm p-3 d-inline-block  h5 border">
						<span className=" h5">Color : </span>
						<span>{props.detail.color}</span>
					</div>
				</strong>
				<strong>
					<div className="border-info rounded-pill text-muted shadow-sm p-3 d-inline-block  h5 border">
						<span className=" h5">Material : </span>
						<span>{props.detail.material}</span>
					</div>
				</strong>
				<strong>
					<div className="border-info rounded-pill text-muted shadow-sm p-3 d-inline-block  h5 border">
						<span className=" h5">category : </span>
						<span>{props.detail.category}</span>
					</div>
				</strong>
				<strong>
					<div className="border-info rounded-pill text-muted shadow-sm p-3 d-inline-block  h5 border">
						<span className=" h5">Brand : </span>
						<span>{props.detail.brand}</span>
					</div>
				</strong>

				<strong>
					<div className="rounded-pill border-info text-muted shadow-sm p-3 d-inline-block  h5 border">
						<span className=" h5">Size : </span>
						<span>{props.detail.size}</span>
					</div>
				</strong>
			</Row>
		</Col>
	);
}

export default ImgDetail;
