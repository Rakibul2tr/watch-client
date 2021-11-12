import React from 'react';
import useAuth from '../../../Hoocks/useAuth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/watch-logo.png'
import { Link } from 'react-router-dom';

const Navigation = () => {
  const {user,logOut}=useAuth();
    return (
        <div className="navbg">
           <Navbar collapseOnSelect expand="lg" >
            <Container>
            <Navbar.Brand href="#home">
              <img width="70px" src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto navigaition">
                <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/explore"}>Explore</Nav.Link>
                {
                user.email?<>
                <Nav.Link as={Link} to={"/dashbord"}>Deshbord</Nav.Link>
                <Nav.Link onClick={logOut} as={Link} to={"/"}>Log Out</Nav.Link>
                <span style={{color:'#fff'}}>{user.displayName}</span>
                </>:
                <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
               }
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    );
};

export default Navigation;