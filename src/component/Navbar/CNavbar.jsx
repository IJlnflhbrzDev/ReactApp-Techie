import React, { Component } from 'react'
import  "bootstrap/dist/css/bootstrap.min.css";
import {Navbar,Nav,NavDropdown,Container } from "react-bootstrap";
import "../Navbar/CNavbar.css"
export default class CNavbars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title : 'TECHIE'
    }
  }
  componentDidMount() {
    const Navbar = document.querySelector('.navbar');
    window.onscroll = function () {
      const topWindowScroll = window.scrollY;

      if (topWindowScroll > 100) {
          Navbar.classList.add('activ-chance');
      }

      else {
          Navbar.classList.remove('activ-chance');
      }

    }


  }
  render() {
    return (
      <Navbar expand="md" className="p-2 fixed-top bg-transparent">
        <Container>
          <Navbar.Brand href="#">{this.state.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#service">Service</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#team">Team</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}