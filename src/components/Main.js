import React from "react";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";

const Example = props => {
  return (
    <div>
      <Row className="offset-md-1 align-self-center">
        <Col xs="6" color="info" sm="4">
          .col-6 .col-sm-4
        </Col>
        <Col xs="6" sm="4">
          .col-6 .col-sm-4
        </Col>
        <Col sm="4">.col-sm-4</Col>
      </Row>
    </div>
  );
};

export default Example;
