import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class Signup extends React.Component {
	render() {
		return (
			<Form className="container mt-3 p-3 rounded border">
				<FormGroup>
					<Label for="Name">Name</Label>
					<Input
						type="text"
						name="name"
						id="Name"
						placeholder="inter your name"
					/>
				</FormGroup>
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
				<FormGroup>
					<Label for="Confrim Password">Password</Label>
					<Input
						type="password"
						name="passwordConfrim"
						id="Confrim Password"
						placeholder="password Confrim"
					/>
				</FormGroup>

				<FormGroup check>
					<Label check>
						<Input type="checkbox" />
						<p>Check me out</p>
					</Label>
				</FormGroup>
				<Button className="mt-3">Submit</Button>
			</Form>
		);
	}
}
