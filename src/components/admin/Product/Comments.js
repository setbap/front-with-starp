import React from "react";
import { Row, Col, Button } from "reactstrap";
import Image from "../../fakeData/A.svg";
const Comments = () => {
	return (
		<Row className="shadow-sm py-2">
			<Col
				xs="2"
				lg="1"
				className=" rounded-pill  d-flex justify-content-center"
			>
				<div>
					<img src={Image} alt="Generic placeholder image" />
				</div>
			</Col>

			<Col xs="10" lg="11">
				<p>Name of writer</p>
				<p>
					Media heading Cras sit amet nibh libero, in gravida nulla.
					Nulla vel metus scelerisque ante sollicitudin commodo. Cras
					purus odio, vestibulum in vulputate at, tempus viverra
					turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
					Donec lacinia congue felis in faucibus.
				</p>
			</Col>
		</Row>
	);
};

export default Comments;
