import React from 'react'
import {
    Navbar
} from 'react-bootstrap'
import {
    Link
} from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg="light">
            <Link to='/' className='navbar-brand'>React Todolist</Link>
        </Navbar>
    )
}

export default Header