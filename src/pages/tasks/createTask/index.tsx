import { Task } from '../../../services/task.interface'
import { Helmet } from 'react-helmet'
import TaskForm from '../../../components/taskForm'
import createTask from '../../../services/createTask.service'
import { CreateTask as CreateTaskInterface } from '../../../services/createTask.interface'
import {
    useState
} from 'react'
import {
    Container, Row, Col,
    Card
} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const CreateTask = () => {
    const _task:Task = {name: '', content: '', status: 'todo'} 
    const [disabled, setDisabled] = useState(false)
    const history = useHistory()

    const onSubmit = async (task: Task) => {
        setDisabled(true)
        const request:CreateTaskInterface = await createTask(task)
        if(request.status === 201 && request.data) {
            history.push(`/tasks/${request.data.id}`)
        } else {
            setDisabled(false)
        }
    }

    return (
        <>
            <Helmet>
                <title>Create Task</title>
            </Helmet>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={10} md={8} lg={6}>
                        <h3 className="my-4">Create Task</h3>
                        <Card>
                            <Card.Body>
                                <TaskForm task={_task} onSubmit={onSubmit} disabled={disabled} action="Create" />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CreateTask
