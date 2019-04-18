import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
class TodoItems extends Component {
	createTasks = (item, i) => {
		return (
			<div key={i}>
				<Row className="mx-0 ">
					<Col lg="3" className="m-0 p-0">
						<div className="p-3  bg-dark text-white">
							{item.title}
						</div>
					</Col>

					<Col lg="9" className="m-0 p-0">
						<div>
							<div className="p-3 border bg-white text-dark">
								{item.desc}
								<Button
									className="p-0 m-0"
									close
									onClick={() => this.props.deleteItem(item)}
								/>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		);
	};
	render() {
		const todoEntries = this.props.entries;
		const listItems = todoEntries.map(this.createTasks);

		return <div className="theList">{listItems}</div>;
	}
}

export default TodoItems;
