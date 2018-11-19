import React, { Fragment } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
} from 'reactstrap';

import { Link } from 'react-router-dom'

import { isAuthenticated } from '../../helper/index'

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleLogout = () => {
        window.localStorage.removeItem("token")
        this.props.history.push("/")
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Wayfarer</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {isAuthenticated() ?
                                <NavItem>
                                    <NavLink tag={Button} onClick={this.handleLogout}>logout</NavLink>
                                </NavItem>
                                : <Fragment><NavItem>
                                    <NavLink tag={Link} to="/login">login</NavLink>
                                </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to="/signup">Sign Up</NavLink>
                                    </NavItem></Fragment>}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}