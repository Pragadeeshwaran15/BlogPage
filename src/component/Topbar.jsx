import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


function Topbar() {
    let Navigate=useNavigate()
  return <>
  <Navbar expand="lg" className="topbar">
      <Container>
        <Navbar.Brand>BlogIn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link onClick={()=>Navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={()=>Navigate("/dashboard")}>Dashboard</Nav.Link>
            <Nav.Link onClick={()=>Navigate("/create")} >Create</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}

export default Topbar
