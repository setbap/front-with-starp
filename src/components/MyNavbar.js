import React from "react";
import { NavLink as NLink } from "react-router-dom";
import { connect } from "react-redux";
import { logoutuser } from "../actions/authActions";
import PropTypes from "prop-types";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";

class MyNavbar extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.handleToggleClick = this.handleToggleClick.bind(this);
		this.state = {
			isOpen: false,
			toggle: "",
		};
	}

	handleLogout(e) {
		e.preventDefault();
		this.props.logoutuser();
	}

	handleToggleClick(e) {
		e.preventDefault();
		this.setState((state) => ({
			toggle: state.toggle ? "" : "deactive",
		}));
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}
	render() {
		const { isAuth, user } = this.props.auth;

		const loged = (
			<UncontrolledDropdown nav inNavbar>
				<DropdownToggle nav caret>
					Options
				</DropdownToggle>
				<DropdownMenu right>
					<DropdownItem tag={NLink} to="/add">
						Option 1
					</DropdownItem>
					<DropdownItem>Option 2</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>Reset</DropdownItem>
				</DropdownMenu>
			</UncontrolledDropdown>
		);

		const notwidelogged = (
			<Nav className="ml-auto" navbar>
				<NavItem>
					<NavLink tag={NLink} to="/signup">
						signup
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink tag={NLink} to="/login">
						login
					</NavLink>
				</NavItem>
				{isAuth ? loged : ""}
			</Nav>
		);

		const wideloged = (
			<Nav className="ml-auto" navbar>
				<NavItem>
					<NavLink tag={NLink} to="/signup">
						<img
							src={user.avatar}
							className="header-img"
							alt={user.name}
						/>
						{user.name}
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						tag={NLink}
						onClick={this.handleLogout.bind(this)}
						to="/login"
					>
						Logout
					</NavLink>
				</NavItem>
				{isAuth ? loged : ""}
			</Nav>
		);

		return (
			<div className="sticky-top">
				<Navbar color="dark" dark expand="md">
					<NavbarBrand tag={NLink} to="/">
						Shonode
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar />
					{isAuth ? wideloged : notwidelogged}
				</Navbar>
			</div>
		);
	}
}

MyNavbar.propTypes = {
	logoutuser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
	auth: state.Auth,
});
export default connect(
	mapStateToProps,
	{ logoutuser },
)(MyNavbar);
