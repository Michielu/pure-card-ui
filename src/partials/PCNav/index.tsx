import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

function PCNav() {
    return (
        <div className="row pc-padding-10">
            <Navbar sticky="top" bg="light" expand="sm" className="pc-width-100">
                <Navbar.Brand href="/">Pure Card</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/cards">Cards</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>)
}

export default PCNav;