import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ErrModal = (props) => {
	const { data } = props;
	return (
		<Modal
			isOpen={props.numberErr > 0}
			toggle={props.handleErr}
			className={props.className}
		>
			<ModalHeader toggle={props.handleErr}>
				{props.head ? props.head : "Error"}
			</ModalHeader>
			<ModalBody>
				{data.length
					? props.data.map((item, index) => {
							return (
								<div className="modal-items" key={index}>
									<span className="modal-param">
										{item.param} :
									</span>
									<span className="modal-msg">
										{" "}
										{item.msg}
									</span>
								</div>
							);
					  })
					: ""}
			</ModalBody>
			<ModalFooter>
				<Button color="secondary" onClick={props.handleErr}>
					Close
				</Button>
			</ModalFooter>
		</Modal>
	);
};

export default ErrModal;
