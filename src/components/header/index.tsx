import {
    Navbar, Nav, NavItem,
    Container
} from 'react-bootstrap'
import {
    Link
} from 'react-router-dom'
import { HeaderProps } from './headerProps.interface'

const Header = ( {user}:HeaderProps ) => {
    
    return (
        <Navbar bg="primary" variant="dark" className="navbar-expand-lg">
            <Container fluid>           
                <Link to='/' className='navbar-brand'>React Todolist</Link>
                <Nav className="mr-auto">
                    {user ?
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
                {user &&
                    <Nav>
                        <NavItem>
                            <span>Welcome! {user}</span>
                        </NavItem>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
}

export default Header