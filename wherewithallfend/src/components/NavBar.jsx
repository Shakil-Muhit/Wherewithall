import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';
import React from 'react';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" position="sticky">
        <Container>
          <Navbar.Brand href="/community">WhereWithAll</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/community">Community</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
        </Container>

        <Container style = {{marginLeft: "1200px"}}>
          <SearchBar/>
        </Container>
      </Navbar>
  )
}

export default NavBar