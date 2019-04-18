import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { DELETE_SPEC } from "../../../actions/type";
import PropTypes from "prop-types";
class Item extends Component {
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
									onClick={() => this.props.removeSpec(item)}
								/>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		);
	};
	render() {
		const items = this.props.items;
		return (
			<div className="theList">
				{items ? items.map(this.createTasks) : ""}
			</div>
		);
	}
}

Item.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.Auth,
	err: state.Err,
	items: state.SpecItem.specs
});

const mapDispatchToProps = dispatch => {
	return {
		removeSpec: item => dispatch({ type: DELETE_SPEC, payload: item })
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Item)
);
