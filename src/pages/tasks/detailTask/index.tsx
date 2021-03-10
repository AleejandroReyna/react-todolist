import {
    Container, Row, Col,
    Card,
    Button,
    Modal
} from 'react-bootstrap'
import { Task } from '../../../services/task.interface'
import { Helmet } from 'react-helmet'
import { Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom'


interface DetailInterface {
    id: string
}

const DetailTask = () => {
    const task:Task = {name: 'task test', content: 'task test example', status: 'todo'}
    const params:DetailInterface = useParams() 
    const { id } = params
    const { url } = useRouteMatch()

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
                                <Link className="btn btn-success" to={`/tasks/${id}/edit/`}>Edit</Link>{' '}
                                <Link className="btn btn-danger" to={`/tasks/${id}/delete/`}>Delete</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Switch>
                <Route path={`${url}/delete/`}>
                    <Helmet>
                        <title>Delete Task</title>
                    </Helmet>
                    <Modal show={true}>
                        <Modal.Header>
                            <Modal.Title>Delete Task</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Are you sure to delete task with ID: {id}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Link className="btn btn-outline-secondary" to={`/tasks/${id}/`}>Cancel</Link>{' '}
                            <Button variant="danger">Delete</Button>
                        </Modal.Footer>
                    </Modal>
                </Route>
            </Switch>
        </>
    )
}

export default DetailTask
