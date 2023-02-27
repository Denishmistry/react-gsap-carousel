import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  /******************* 
  @purpose : Rander HTML/ React Components
  @Author : INIC
  ******************/
  return (
    <header>
      <div className="container px-0">
        <Navbar expand="md">
          <Navbar.Brand href="/">
            <img src="assets/images/brand-logo.svg" />
          </Navbar.Brand>
          <div className="header-right">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="navbar pr-0">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="guidelines">Guidelines</Nav.Link>
                <Nav.Link href="plugins">Plugins</Nav.Link>
              </Nav>            
            </Navbar.Collapse>
            <Form inline>
                {isSearchActive && (
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2 header-search"
                  />
                )}
                <em
                  className="bx bx-search search-button"
                  onClick={() => setIsSearchActive(!isSearchActive)}
                />
              </Form>
            </div>
        </Navbar>
      </div>
    </header>
  );
}
/******************** 
@purpose : Connect With Redux
@Parameter : {ui}
@Author : INIC
******************/
const mapStateToProps = ({ ui }) => ({});
export default withRouter(connect(mapStateToProps)(Header));
