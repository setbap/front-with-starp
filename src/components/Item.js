import React, { Component } from "react";
import { Row, Col } from "reactstrap";
class TodoItems extends Component {
	createTasks = (item, i) => {
		return (
			<div key={i}>
				<Row className="mt-2">
					<Col xs="6" color="info" sm="4">
						{item.name}
					</Col>
					<Col xs="6" sm="4">
						{item.title}
					</Col>
					<button
						className="btn btn-danger"
						onClick={() => this.props.deleteItem(item)}
					>
						{" "}
						Remove
					</button>
				</Row>
			</div>
		);
	};
	render() {
		const todoEntries = this.props.entries;
		const listItems = todoEntries.map(this.createTasks);

		return <ul className="theList">{listItems}</ul>;
	}
}

export default TodoItems;
