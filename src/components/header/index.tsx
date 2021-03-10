import {
    useState,
    useEffect
} from 'react'
import {
    Navbar, Nav, NavItem,
    Container
} from 'react-bootstrap'
import {
    Link
} from 'react-router-dom'
import getToken from '../../services/getToken.service'

const Header = () => {
    const [logged, isLogged] = useState(false)

    useEffect(() => {
        if (getToken()) {
            isLogged(true)
        } else {
            isLogged(false)
        }
    }, [])
    return (
        <Navbar bg="light" className="navbar-expand-lg">
            <Container fluid>           
                <Link to='/' className='navbar-brand'>React Todolist</Link>
                <Nav className="mr-auto">
                    {logged ?
                        <>
                            <NavItem>
                                <Link to="/dashboard/" className="nav-link">Dashboard</Link>
                            </NavItem>
                        </>
                    :   
                        <>
                            <NavItem>
                                <Link to="/login/" className="nav-link">Login</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/signup/" className="nav-link">Singup</Link>
                            </NavItem>
                        </>
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header