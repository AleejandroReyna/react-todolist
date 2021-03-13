import { useEffect } from 'react'
import {
    Container, Row, Col,
    Spinner
} from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { useHistory } from 'react-router-dom'

const Logout = ({ toggleUser, addAlert}) => {
    const history = useHistory()

    useEffect(() => {
        localStorage.clear()
        toggleUser("")
        addAlert({variant: "success", content: "Your session has been closed."})
        history.push("/login/")
    })
    return (
        <>
            <Helmet>
                <title>Logout</title>
            </Helmet>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1 className="mt-4 mb-4">Closing session</h1>
                        <Spinner animation="border" variant="primary" />
                    </Col>
                </Row>
            </Container>
        </>
    )
} 

export default Logout