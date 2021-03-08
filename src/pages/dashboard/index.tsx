import { Helmet } from 'react-helmet'
import TaskPanel from '../../components/taskPanel'
import {
    Container, Row, Col,
    Card
} from 'react-bootstrap'

const Dashboard = () => {
    return (
        <>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <Container fluid>
                <Row>
                    <Col>
                        <h3 className="mt-4 mb-4">Dashboard</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TaskPanel type="todo" label="To Do" />
                    </Col>
                    <Col>
                        <TaskPanel type="doing" label="Doing" />
                    </Col>
                    <Col>
                        < TaskPanel type="inreview" label="In Review"/>
                    </Col>
                    <Col>
                        < TaskPanel type="done" label="Done"/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard