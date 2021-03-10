import { Task } from '../../../services/task.interface'
import { Helmet } from 'react-helmet'
import TaskForm from '../../../components/taskForm'
import {
    useState
} from 'react'
import {
    Container, Row, Col,
    Card
} from 'react-bootstrap'
import { useParams } from 'react-router-dom'

interface EditInterface {
    id: string
}

const EditTask = () => {
    const _task:Task = {name: 'sample task', content: 'sample task content', status: 'todo'} 
    const [disabled, setDisabled] = useState(false)
    const params:EditInterface = useParams()
    const { id } = params
    const onSubmit = (task: Task):void => {
        console.log({id, ...task})
        setDisabled(true)
    }

    return (
        <>
            <Helmet>
                <title>Edit Task {id}</title>
            </Helmet>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={10} md={8} lg={6}>
                        <h3 className="my-4">Edit Task </h3>
                        <Card>
                            <Card.Body>
                                <TaskForm task={_task} onSubmit={onSubmit} disabled={disabled} action="Edit" />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default EditTask