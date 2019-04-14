import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import cj from "../fakeData/c.jpg";

export default class Product extends Component {
	static propTypes = {
		prop: PropTypes
	};

	render() {
		return (
			<Row className="mt-4 ">
				<Col md="6" className=" mb-5">
					<img className="img-fluid" src={cj} />
				</Col>
				<Col md="6" className="text-black mb-2">
					<h3>Young Woman Wearing Dress</h3>
					<strong class="text-primary h4">
						<p>
							<span class="text-muted h5">Price : </span>
							<span>$120.00</span>
						</p>
					</strong>

					<p className="justify">
						A small river named Duden flows by their place and
						supplies it with the necessary regelialia. It is a
						paradisematic country, in which roasted parts of
						sentences fly into your mouth.
					</p>
					<p>
						On her way she met a copy. The copy warned the Little
						Blind Text, that where it came from it would have been
						rewritten a thousand times and everything that was left
						from its origin would be the word "and" and the Little
						Blind Text should turn around and return to its own,
						safe country. But nothing the copy said could convince
						her and so it didn’t take long until a few insidious
						Copy Writers ambushed her, made her drunk with Longe and
						Parole and dragged her into their agency, where they
						abused her for their.
					</p>

					<a href="cart.html" class="btn btn-primary py-3 px-5">
						Add to Cart
					</a>
				</Col>
			</Row>
		);
	}
}
