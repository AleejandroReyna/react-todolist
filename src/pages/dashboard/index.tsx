import { Helmet } from 'react-helmet'
import TaskPanel from '../../components/taskPanel'
import {
    Container, Row, Col
} from 'react-bootstrap'
import {
    useEffect,
    useState
} from 'react'
import { Link } from 'react-router-dom'
import { Task } from '../../services/task.interface'
import getTasks from '../../services/getTasks.service'
import { GetTasks } from '../../services/getTasks.interface'

const Dashboard = () => {
    const [loading, setLoading] = useState(true)
    const [tasks, setTasks] = useState<Task[]>([]) 

    const getPanelTasks = (status: string):Task[] => {
        return tasks.filter(task => task.status === status)
    }

    useEffect(() => {
        if(loading) {
            const getState = async () => {
                const request:GetTasks = await getTasks()
                if(request.data && request.status === 200) {
                    setTasks(request.data)
                }
                setLoading(false)
            }
            getState()
        }
    }, [loading])

    return (
        <>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <Container fluid>
                <Row>
                    <Col className="py-4 d-flex justify-content-between align-items-center">
                        <h3>Dashboard</h3>
                        <Link to="/tasks/create/" className="btn btn-primary">Create Task</Link>          
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TaskPanel loading={loading} type="todo" label="To Do" tasks={getPanelTasks('todo')} />
                    </Col>
                    <Col>
                        <TaskPanel loading={loading} type="doing" label="Doing" tasks={getPanelTasks('doing')} />
                    </Col>
                    <Col>
                        < TaskPanel loading={loading} type="inreview" label="In Review" tasks={getPanelTasks('inreview')} />
                    </Col>
                    <Col>
                        < TaskPanel loading={loading} type="done" label="Done" tasks={getPanelTasks('done')} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard