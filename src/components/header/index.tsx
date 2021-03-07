import React from 'react'
import {
    Navbar,
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
            </Container>
        </Navbar>
    )
}

export default Header