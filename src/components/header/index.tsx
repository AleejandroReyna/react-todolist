import React from 'react'
import {
    Navbar, Nav, NavItem,
    Container
} from 'react-bootstrap'
import {
    Link
} from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg="light" className="navbar-expand-lg">
            <Container fluid>           
                <Link to='/' className='navbar-brand'>React Todolist</Link>
                <Nav className="mr-auto">
                    <NavItem>
                        <Link to="/login/" className="nav-link">Login</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/signup/" className="nav-link">Singup</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/dashboard/" className="nav-link">Dashboard</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header