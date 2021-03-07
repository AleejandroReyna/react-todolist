import React from 'react'
import {
    Navbar, Nav,
    Container
} from 'react-bootstrap'
import {
    Link
} from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg="light">
            <Container fluid>           
                <Link to='/' className='navbar-brand'>React Todolist</Link>
                <Nav>
                    <Link to="/login/">Login</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header