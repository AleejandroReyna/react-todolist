import {
    useState
} from 'react'
import {
    Container, Row, Col,
    Card,
    Form, FormControl, FormGroup,
    Button
} from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import loginService from '../../services/login.service'
import { User } from '../../services/user.interface'
import setToken from '../../services/setToken.service'
import { useHistory } from 'react-router-dom'
import { LoginProps } from './loginProps.interface'

const Login = ({user, toggleUser}:LoginProps) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const history = useHistory()

    const login = async () => {
        setSubmitting(true)
        const params:User = {username, password}
        const response = await loginService(params)
        console.log(response)
        if(response.status === 200) {
            setToken(response.response)
            toggleUser(response.response.username)
            history.push("/dashboard/")
        } else {
            setSubmitting(false)
        }
    }
    
    return (
        <>
        <Helmet>
            <title>Login</title>
        </Helmet>
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} sm={10} md={8} lg={6}>
                    <Card className="mt-4">
                        <Card.Header className="text-center">
                            Login
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <FormGroup>
                                    <label htmlFor="username">Username: </label>
                                    <FormControl 
                                        type="text" 
                                        value={username} 
                                        onChange={e => setUsername(e.target.value)}
                                        disabled={submitting} />
                                </FormGroup>
                                <FormGroup>
                                    <label htmlFor="password">Password: </label>
                                    <FormControl 
                                        type="password"
                                        value={password} 
                                        onChange={e => setPassword(e.target.value)}
                                        disabled={submitting} />
                                </FormGroup>                                   
                                <Button onClick={login} disabled={submitting}>Login</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Login