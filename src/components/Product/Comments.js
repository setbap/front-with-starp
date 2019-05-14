import React from "react";
import { Row, Col } from "reactstrap";
import Image from "../fakeData/A.svg";
const Comments = (props) => {
	const createTasks = (item, i) => {
		return (
			<div key={i}>
				<Row className="shadow-sm py-2">
					<Col
						xs="2"
						lg="1"
						className=" rounded-pill  d-flex justify-content-center"
					>
						<div>
							<img src={Image} alt="Generic placeholder" />
						</div>
					</Col>

					<Col xs="10" lg="11">
						<p>Name of writer</p>
						<p>
							Media heading Cras sit amet nibh libero, in gravida
							nulla. Nulla vel metus scelerisque ante sollicitudin
							commodo. Cras purus odio, vestibulum in vulputate
							at, tempus viverra turpis. Fusce condimentum nunc ac
							nisi vulputate fringilla. Donec lacinia congue felis
							in faucibus.
						</p>
					</Col>
				</Row>
			</div>
		);
	};

	// return() {
	const items = props.items;

	return <div className="theList">{items ? items.map(createTasks) : ""}</div>;
	// }
};

export default Comments;
