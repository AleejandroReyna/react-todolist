import {
    Container, Row, Col,
    Card,
    Button
} from 'react-bootstrap'
import { Task } from '../../../services/task.interface'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const DetailTask = ( { match } ) => {
    const task:Task = {name: 'task test', content: 'task test example', status: 'todo'}
    const {params: { id }} = match 

    return (
        <>
            <Helmet>
                <title>Task: { id }</title>
            </Helmet>
            <Container>
                <Row>
                    <Col>
                        <h3 className="my-4">Task: {task.name}</h3>
                        <Card>
                            <Card.Header>
                                <h6>Info</h6>
                            </Card.Header>
                            <Card.Body>
                                <strong>ID: </strong><span>{ id }</span><br/>
                                <strong>Content: </strong><span>{ task.content }</span><br/>
                                <strong>Status: </strong><span>{ task.status }</span><br/>
                                <strong>Actions: </strong>{' '}
                                <Link className="btn btn-success" to={`/tasks/${id}/edit/`}>Edit</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DetailTask
