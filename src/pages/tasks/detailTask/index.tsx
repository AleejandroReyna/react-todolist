import {
    useState,
    useEffect
} from 'react'
import {
    Container, Row, Col,
    Card,
    Button,
    Modal,
    Spinner
} from 'react-bootstrap'
import { Task } from '../../../services/task.interface'
import { Helmet } from 'react-helmet'
import { Switch, Route, Link, useParams, useRouteMatch, useHistory } from 'react-router-dom'
import getTask from '../../../services/getTask.service'
import { ServiceTask } from '../../../services/serviceTask.interface'
import deleteTask from '../../../services/deleteTask.service'


interface DetailInterface {
    id: string
}

const DetailTask = () => {
    const [task, setTask] = useState<Task | null>(null)
    const [loading, setLoading] = useState(true)
    const params:DetailInterface = useParams() 
    const { id } = params
    const { url } = useRouteMatch()
    const history = useHistory()

    useEffect(() => {
        const getData = async () => {
            const request:ServiceTask = await getTask(id)
            if(request.status === 200 && request.data) {
                setTask(request.data)
                setLoading(false)
            }
        }
        getData()
    }, [loading])

    const completeDelete = async () => {
        setLoading(true)
        const request = await deleteTask(id)
        if(request.status === 204) {
            history.push('/dashboard/')
        } else {
            setLoading(false)
        }
    }

    return (
        <>
            <Helmet>
                <title>Task: { id }</title>
            </Helmet>
            {!task ?
                <div className="text-center my-4"><Spinner variant="primary" animation="border" /></div>
            :
                <>
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
                                    <Button variant="danger" disabled={loading} onClick={completeDelete} >Delete</Button>
                                </Modal.Footer>
                            </Modal>
                        </Route>
                    </Switch>
                </>
            }
        </>
    )
}

export default DetailTask
