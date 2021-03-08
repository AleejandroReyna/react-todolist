import {
    Container, Row, Col,
    Card,
    Form, FormControl, FormGroup
} from 'react-bootstrap'
import { Helmet } from 'react-helmet'

const Login = () => {
    
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
                                    <FormControl type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <label htmlFor="password">Password: </label>
                                    <FormControl type="password" />
                                </FormGroup>
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