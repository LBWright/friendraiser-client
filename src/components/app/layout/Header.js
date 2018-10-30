import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Navbar color="light" light>
        <NavbarBrand tag={Link} to="/dashboard">
          Friendraiser - Dev
        </NavbarBrand>
        <Nav pills>
          <NavItem>
            <NavLink tag={Link} to="/tasks">
              Manage Tasks
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/supporters">
              Manage Supporters
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/meetings">
              Manage Meetings
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
