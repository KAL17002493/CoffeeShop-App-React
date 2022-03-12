import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Header() {
  return (

    <div>
        <Navbar bg="dark" varient="dark">
            <Container>

                <Navbar.Brand href="#home">Coffee Shop</Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                    </Nav>

            </Container>
        </Navbar>
    </div>

  )
}

export default Header