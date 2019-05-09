import React, { Fragment, Component } from "react";
import axios from "axios";
import { ADD_IMG } from "../../../../actions/type";
import { Progress, Alert } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import UpImgs from "./UploadedImage";

class Upload extends Component {
	constructor(props) {
		super(props);

		this.state = {
			file: "",
			fileName: "hello",
			uploadedFile: "",
			message: "",
			uploadPercentage: "",
			visibly: false,
		};
		this.OnSubmitImg = this.OnSubmitImg.bind(this);
		this.OnChangeUp = this.OnChangeUp.bind(this);
		this.OnToggleAlert = this.OnToggleAlert.bind(this);
	}

	OnChangeUp = (e) => {
		if (e.target.files[0]) {
			this.setState({
				file: e.target.files[0],
				fileName: e.target.files[0].name,
			});
		}
	};

	OnToggleAlert = (e) => {
		this.setState({
			visibly: false,
		});
	};

	OnSubmitImg = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("image", this.state.file);

		try {
			const res = await axios.post(
				"http://localhost:5000/api/test",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
					onUploadProgress: (progressEvent) => {
						this.setState({
							uploadPercentage: parseInt(
								Math.round(
									(progressEvent.loaded * 100) /
										progressEvent.total,
								),
							),
						});

						setTimeout(
							() =>
								this.setState({
									uploadPercentage: 0,
								}),
							2500,
						);
					},
				},
			);

			const url = res.data.url;
			this.setState({
				message: "uploaded ...",
				visibly: true,
			});
			this.props.adder(url);
		} catch (err) {
			if (err.response.status === 500) {
				this.setState({
					message: "There was a problem with the server",
					visibly: true,
				});
			} else {
				this.setState({
					message: err.response.data.msg,
					visibly: true,
				});
			}
		}
	};
	render() {
		const {
			message,
			fileName,
			uploadPercentage,

			visibly,
		} = this.state;
		return (
			<Fragment>
				{message ? (
					<Alert
						color="info"
						isOpen={visibly}
						toggle={this.OnToggleAlert}
					>
						{message}
					</Alert>
				) : null}

				<div className="custom-file mb-4">
					<input
						type="file"
						className="custom-file-input"
						id="customFile"
						onChange={this.OnChangeUp}
					/>
					<label className="custom-file-label" htmlFor="customFile">
						{fileName}
					</label>
				</div>

				<Progress animated color="info" value={uploadPercentage} />

				<input
					type="button"
					onClick={this.OnSubmitImg}
					value="Upload"
					className="btn btn-primary btn-block mt-4"
				/>

				<UpImgs />
			</Fragment>
		);
	}
}

Upload.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.Auth,
	err: state.Err,
});

const mapDispatchToProps = (dispatch) => {
	return {
		adder: (url) => dispatch({ type: ADD_IMG, payload: url }),
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps,
	)(Upload),
);
