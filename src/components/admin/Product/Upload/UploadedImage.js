import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { DELETE_IMG } from "../../../../actions/type";
import PropTypes from "prop-types";
class ImageItem extends Component {
	createTasks = (item, i) => {
		return (
			<div key={i}>
				<Row className="mx-0 ">
					<Col lg="3" className="m-0 p-0">
						<img
							className="p-3  bg-dark text-white"
							src={item}
							alt="img"
						/>
					</Col>

					<Col lg="1" className="m-0 p-0">
						<div>
							<div className="p-3 border bg-white text-dark">
								<Button
									className="p-0 m-0"
									close
									onClick={() => this.props.removeImg(item)}
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

ImageItem.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.Auth,
	err: state.Err,
	items: state.Img.imgs,
});

const mapDispatchToProps = (dispatch) => {
	return {
		removeImg: (item) => dispatch({ type: DELETE_IMG, payload: item }),
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(ImageItem),
);
