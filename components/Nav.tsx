import React from 'react';
import{ Navbar, Container, Nav, Image } from 'react-bootstrap';
import { FaTwitter, FaDiscord } from 'react-icons/fa';


function NavComponent() {
      return (
        <>
        <Navbar className='hov-navbar navbar-dark' expand="lg" style={{justifyContent:"center", zIndex:"10"}}>
          <Container className='mx-lg-5 hov-nav-container'>
            <Navbar.Brand href="/#hero"> 
              <img
                alt="logo"
                src="/MLogo-long.png"
                className="align-top rm-d"
                style={{height:"30px"}}
              /> 
              <img
                alt="logo"
                src="/MLogo.png"
                className="align-top rm-m"
                style={{height:"60px"}}
              />
            </Navbar.Brand>            
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/#about">About</Nav.Link>
                <Nav.Link href="/#roadmap">Roadmap</Nav.Link>
                <Nav.Link href="/#team">Team</Nav.Link>   
                <Nav.Link href="/contact">Contact</Nav.Link> 
                <Nav.Link href="https://docs.mellowlabs.finance/">Docs</Nav.Link>    
                {/* <Nav.Link href="" target="_blank">Whitepaper</Nav.Link> */}
              </Nav>              
              {/* <Nav className="ms-auto">
                <div className='nav-social-cont'>
                  <Nav.Link className="nav-social" href="" target="_blank"><FaDiscord/></Nav.Link>
                  <Nav.Link className="nav-social" href="" target="_blank"><FaTwitter/></Nav.Link>
                </div>
              </Nav> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
      );
    }
export default NavComponent;
