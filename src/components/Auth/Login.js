import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class Signup extends React.Component {
	render() {
		return (
			<React.Fragment>
				<p className="display-4 m-3"> Login </p>
				<Form className="container mt-3 p-3 rounded border">
					<FormGroup>
						<Label for="email">Email</Label>
						<Input
							type="email"
							name="email"
							id="email"
							placeholder="your own email"
						/>
					</FormGroup>
					<FormGroup>
						<Label for="Password">Password</Label>
						<Input
							type="password"
							name="password"
							id="Password"
							placeholder="password 5 char and contain 1 number"
						/>
					</FormGroup>
					<Button className="mt-1">Submit</Button>
				</Form>
			</React.Fragment>
		);
	}
}
