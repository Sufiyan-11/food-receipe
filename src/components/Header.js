import { Nav, Navbar, Container } from 'react-bootstrap';
import React from 'react';
import Foodlogo from '../assets/food-logo.png';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className=" w-100 justify-content-end fixed-top navbdr">
      <Container>
        <Navbar.Brand href="#home"><img src ={Foodlogo} className=' logo-img' alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" w-100 justify-content-end">
            <NavLink to="/" className='astyle'>HOME</NavLink>
            <NavLink to="/About"className='ms-5 astyle'>ABOUT US</NavLink>
            <NavLink to="/Service"className='ms-5 astyle'>SERVICES</NavLink>
            <NavLink to="/Contact"className='ms-5 astyle'>CONTACT US</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
