import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';

import logoAndName from "../images/logos/GoCampLogoNameGreen.png"

export default class NavbarFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
        this.onClick = this.onClick.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <div>
                <Router>
                    <Navbar color="#689f38 light-green darken-2" dark expand="lg" fixed="top" scrolling>
                        <NavbarBrand href="/">
                            <div className="row">
                                <img src={logoAndName} height="30" className="d-inline-block align-top logo" id="logoimg" />
                            </div>
                        </NavbarBrand>
                        {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                        <Collapse isOpen={this.state.collapse} navbar>
                            <NavbarNav left>
                                <NavItem >
                                    <Scrollchor to="#suggested-trips" className="nav-link">
                                        <b>Suggested Trips</b>
                                    </Scrollchor>
                                </NavItem>
                                <NavItem>
                                    <Scrollchor to="#create-your-own-trip" className="nav-link">
                                        <b>Plan a Trip</b>
                                    </Scrollchor>
                                </NavItem>
                                <NavItem >
                                    <Scrollchor to="#wish-list" className="nav-link">
                                        <b>My Trips</b>
                                    </Scrollchor>
                                </NavItem>
                                <NavItem>
                                    <Scrollchor to="equiment-component" className="nav-link">
                                        <b>Equipment</b>
                                    </Scrollchor>
                                </NavItem>
                                <NavItem >
                                    <Scrollchor to="#itinerary" className="nav-link">
                                        <b>Itinerary</b>
                                    </Scrollchor>
                                </NavItem>
                            </NavbarNav>
                        </Collapse>
                    </Navbar>
                </Router>
            </div>
        );
    }
}



