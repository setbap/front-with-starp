import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Image from "../../fakeData/A.svg";
import { connect } from "react-redux";
import { NEW_ERR } from "../../../actions/type";
import axios from "axios";
import ErrModal from "../../error/ErrorModal";
import { Button, Label, Input } from "reactstrap";

class Comments extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			content: "",
			errors: [],
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleErr = this.handleErr.bind(this);
	}

	postComment = () => {
		if (this.props.auth.isAuth) {
			axios
				.post("http://localhost:5000/api/shop/comment", {
					prodId: this.props.pid,
					title: this.state.title,
					content: this.state.content,
				})
				.then((res) => {
					this.setState({
						title: "",
						content: "",
					});
					console.log(this.props);
				})
				.catch((err) => {
					this.props.accessD([
						{
							param: "fill correctly",
							msg: "min length for title is 4 ",
						},
						{
							param: "fill correctly",
							msg: "min length for content is 8 ",
						},
					]);
				});
		} else {
			this.props.accessD([
				{
					param: "access denay",
					msg: "for post comment you must loged in",
				},
			]);
		}
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	handleErr(e) {
		this.setState({
			errors: [],
		});
	}

	createTasks = (item, i) => {
		return (
			<div key={i}>
				<Row className="shadow-sm py-2 my-3">
					<Col
						xs="2"
						lg="1"
						className=" rounded-pill  d-flex justify-content-center"
					>
						<div>
							<strong>{item.userId.name}</strong>
						</div>
					</Col>

					<Col xs="10" lg="11">
						<p>
							<strong>{item.title}</strong>
						</p>
						<p>{item.content}</p>
					</Col>
				</Row>
			</div>
		);
	};
	componentWillReceiveProps(newProps) {
		if (newProps.err) {
			this.setState({
				errors: newProps.err,
			});
		}
	}

	render() {
		const items = this.props.items;

		return (
			<div className="theList">
				<ErrModal
					numberErr={this.state.errors.length}
					handleErr={this.handleErr}
					className=""
					data={this.state.errors}
				/>
				<div className="p-3 mt-3 border">
					<div className="mb-2 mr-sm-2 mb-sm-0">
						<Label for="name" className="mr-sm-2">
							title
						</Label>
						<Input
							type="text"
							onChange={this.handleChange}
							value={this.state.title}
							name="title"
							id="title"
							placeholder="title"
						/>
					</div>

					<div className="mb-2 mr-sm-2 mb-sm-0">
						<Label for="content" className="mr-sm-2">
							content
						</Label>
						<Input
							onChange={this.handleChange}
							value={this.state.content}
							type="text"
							name="content"
							id="content"
							placeholder="your comment"
						/>
					</div>

					<Button onClick={this.postComment} className="btn mt-3">
						post commnet
					</Button>
				</div>

				{items ? items.map(this.createTasks) : ""}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.Auth,
	err: state.Err,
});

const mapDispatchToProps = (dispatch) => {
	return {
		accessD: (err) => dispatch({ type: NEW_ERR, payload: err }),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Comments);
