import React from 'react'
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link'
import Login from '@/pages/Login';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="" variant="dark" className='pt-4 fixed-top navigation'>
            <Container className='mt-5 pt-2 downnavbar' >
                <div className='d-flex align-items-center justify-content-center text-light fixed-top'>
                    <Navbar.Brand href="https://www.yit.edu.in/" className='' target='_blank'>
                        <img
                            src="/YiT_logo.png"
                            width="60"
                            height="60"
                            className="d-inline-block align-text-top rounded yitlogo"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <div className='row px-4'>
                        <div className='d-flex flex-column justify-content-center align-items-center mt-1 p-0'>
                            <h3 className='px-2 yitheading'>Yenepoya Institute Of Technology</h3>
                            <p className=''>( Approved by AICTE, New Delhi, Affiliated to Visvesvaraya Technological University, Belgavi )</p>
                        </div>
                    </div>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto d-flex flex ">
                        <Nav.Link className='navrow' href="#homepage">Home</Nav.Link>
                        <Nav.Link className='navrow' href="#about">About</Nav.Link>
                        <Nav.Link className='navrow' href="#admission">Admission</Nav.Link>
                        <Nav.Link className='navrow' href="#department">Department</Nav.Link>
                        <Nav.Link className='navrow' href="#achivements">Achivements</Nav.Link>
                        <Nav.Link className='navrow' href="#contact">Contact Us</Nav.Link>
                        <NavDropdown title="Sign In" id="collasible-nav-dropdown" className='navrow'>
                            <NavDropdown.Item className='dropact'>
                                <Link href="/Login">
                                    Faculty Login
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className='dropact'>
                                <Link href="/Login">
                                    Student Login
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className='dropact'>
                                <Link href="/Register">
                                    Register
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav >
                        <Nav.Link className='navrow' href="#notes">Notes</Nav.Link>
                        <Nav.Link className='navrow' href="#galary">Galary</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
