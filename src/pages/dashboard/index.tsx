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
import editTask from '../../services/editTask.service'

const Dashboard = ({ addAlert }) => {
    const [loading, setLoading] = useState(false)
    const [init, setInit] = useState(true)
    const [tasks, setTasks] = useState<Task[]>([]) 

    const getPanelTasks = (status: string):Task[] => {
        return tasks.filter(task => task.status === status)
    }

    useEffect(() => {
        if(init) {
            console.log("initial data here")
            const getState = async () => {
                const request:GetTasks = await getTasks()
                if(request.data && request.status === 200) {
                    setTasks(request.data)
                } else {
                    addAlert({content: "Error with network, try again later.", variant: "danger"})
                }
                setInit(false)
            }
            getState()
        }
    }, [init])

    const taskUpdate = async ( task:Task ) => {
        setLoading(true)
        const { id } = task
        if(id) {
            const request = await editTask(id, task)
            if(request.status === 200) {
                addAlert({content: `the task with id: ${task.id} has updated!`, variant: "success"})
                const taskRequest:GetTasks = await getTasks()
                if(taskRequest.data && taskRequest.status === 200) {
                    setTasks(taskRequest.data)
                } else {
                    addAlert({content: "Error in request!", variant: "danger"})
                }
            } else {
                addAlert({content: "Error with network, try again later.", variant: "danger"})
            }
            setLoading(false)
        }
    }

    return (
        <>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <Container fluid>
                <Row>
                    <Col className="mb-4 d-flex justify-content-between align-items-center">
                        <h3>Dashboard</h3>
                        <Link to="/tasks/create/" className="btn btn-primary">Create Task</Link>          
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TaskPanel 
                            loading={loading || init} 
                            type="todo" 
                            label="To Do" 
                            tasks={getPanelTasks('todo')} 
                            variant="outline-secondary"
                            taskUpdate={taskUpdate} />
                    </Col>
                    <Col>
                        <TaskPanel 
                            loading={loading || init} 
                            type="doing" 
                            label="Doing" 
                            tasks={getPanelTasks('doing')} 
                            variant="info"
                            taskUpdate={taskUpdate} />
                    </Col>
                    <Col>
                        <TaskPanel 
                            loading={loading || init} 
                            type="inreview" 
                            label="In Review" 
                            tasks={getPanelTasks('inreview')} 
                            variant="primary"
                            taskUpdate={taskUpdate} />
                    </Col>
                    <Col>
                        <TaskPanel 
                            loading={loading || init} 
                            type="done" 
                            label="Done" 
                            tasks={getPanelTasks('done')} 
                            variant="success"
                            taskUpdate={taskUpdate} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard