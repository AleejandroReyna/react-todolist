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
import signup from '../../services/signup.service'
import { useHistory } from 'react-router-dom'

const Signup = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [submitting, isSubmitting] = useState(false)
    const history = useHistory()

    const submit = async () => {
        isSubmitting(true)
        if (password === passwordConfirmation) {
            let request = await signup({username, password})
            if(request.status === 201) {
                history.push('/login/')
            }
            isSubmitting(false)
        }
    }
    
    return (
        <>
            <Helmet>
                <title>Signup</title>
            </Helmet>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={10} md={8} lg={6}>
                        <Card>
                            <Card.Header className="text-center">
                                Signup
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <FormGroup>
                                        <label htmlFor="username">Username: </label>
                                        <FormControl type="text"
                                            value={username}
                                            onChange={e => setUsername(e.target.value)}
                                            disabled={submitting}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <label htmlFor="password">Password: </label>
                                        <FormControl type="password"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            disabled={submitting}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <label htmlFor="passwordConfirmation">Password Confirmation: </label>
                                        <FormControl type="password"
                                            value={passwordConfirmation}
                                            onChange={e => setPasswordConfirmation(e.target.value)}
                                            disabled={submitting}
                                        />
                                        {password !== passwordConfirmation &&                                    
                                            <Form.Text>Password and Confirmation must be the same.</Form.Text>
                                        }
                                    </FormGroup>
                                    <Button onClick={submit}
                                        disabled={!username || password !== passwordConfirmation || submitting }>
                                        Signup
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Signup