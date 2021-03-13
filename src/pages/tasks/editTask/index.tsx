import { Task } from '../../../services/task.interface'
import { Helmet } from 'react-helmet'
import TaskForm from '../../../components/taskForm'
import { ServiceTask } from '../../../services/serviceTask.interface'
import getTask from '../../../services/getTask.service'
import {
    useEffect,
    useState
} from 'react'
import {
    Container, Row, Col,
    Card,
    Spinner
} from 'react-bootstrap'
import { useParams, useHistory } from 'react-router-dom'
import editTask from '../../../services/editTask.service'

interface EditInterface {
    id: string
}

const EditTask = ({ addAlert }) => {
    const [task, setTask] = useState<Task>({id: "", name: "", content: "", status: ""})
    const [loading, setLoading] = useState(true)
    const [disabled, setDisabled] = useState(false)
    const params:EditInterface = useParams()
    const history = useHistory()
    const { id } = params


    const onSubmit = async (task: Task) => {
        setDisabled(true)
        const request:ServiceTask = await editTask(id, task)
        if(request.status === 200 && request.data) {
            console.log(request.data)
            addAlert({variant:"success", content: "The task has been updated."})
            history.push(`/tasks/${request.data.id}`)
        } else if(request.status === 500) {
            addAlert({variant:"danger", content: "Network error, try again later."})
        } else {
            addAlert({variant:"danger", content: "Check your data and try again."})
            setDisabled(false)
        }
    }

    useEffect(() => {
        if(loading) {
            const getData = async () => {
                const request:ServiceTask = await getTask(id)
                if(request.status === 200 && request.data) {
                    setTask(request.data)
                }
                setLoading(false)
            }
            getData()
        }
    }, [loading])

    return (
        <>
            <Helmet>
                <title>Edit Task {task.name}</title>
            </Helmet>
            {loading ?
                <div className="mb-4 text-center"><Spinner variant="primary" animation="border" /></div>
                :
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={10} md={8} lg={6}>
                            <h3 className="mb-4">Edit Task </h3>
                            <Card>
                                <Card.Body>
                                    <TaskForm task={task} onSubmit={onSubmit} disabled={disabled} action="Edit" />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}

export default EditTask