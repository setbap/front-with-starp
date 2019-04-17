import React from "react";
import { Row, Col, Button } from "reactstrap";

function Specification() {
	return (
		<React.Fragment>
			<Row className="mx-0 my-3 ">
				<Col lg="3" className="m-0 p-0">
					<div className="p-3 bg-dark text-white">.bg-white</div>
				</Col>

				<Col lg="9" className="m-0 p-0">
					<div className="p-3 border bg-white text-dark">
						.bg-white
					</div>
				</Col>
			</Row>
			<Row className="mx-0 my-3 ">
				<Col lg="3" className="m-0 p-0">
					<div className="p-3 bg-dark text-white">.bg-white</div>
				</Col>

				<Col lg="9" className="m-0 p-0">
					<div className="p-3 border bg-white text-dark">
						.bg-white
					</div>
				</Col>
			</Row>
			<Row className="mx-0 my-3 ">
				<Col lg="3" className="m-0 p-0">
					<div className="p-3 bg-dark text-white">.bg-white</div>
				</Col>

				<Col lg="9" className="m-0 p-0">
					<div className="p-3 border bg-white text-dark">
						.bg-white
					</div>
				</Col>
			</Row>
		</React.Fragment>
	);
}

export default Specification;
