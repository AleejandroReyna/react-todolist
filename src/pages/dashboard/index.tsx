import { Helmet } from 'react-helmet'
import TaskPanel from '../../components/taskPanel'
import {
    Container, Row, Col
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Task } from '../../services/task.interface'

const Dashboard = () => {
    const tasks:Task[] = [
        {id: '1', name: 'test task 1', content: 'test content', status: 'todo'},
        {id: '2', name: 'test task 2', content: 'test content', status: 'doing'},
        {id: '3', name: 'test task 3', content: 'test content', status: 'inreview'},
        {id: '4', name: 'test task 4', content: 'test content', status: 'done'}
    ] 

    const getPanelTasks = (status: string):Task[] => {
        return tasks.filter(task => task.status === status)
    }

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
                        <TaskPanel type="todo" label="To Do" tasks={getPanelTasks('todo')} />
                    </Col>
                    <Col>
                        <TaskPanel type="doing" label="Doing" tasks={getPanelTasks('doing')} />
                    </Col>
                    <Col>
                        < TaskPanel type="inreview" label="In Review" tasks={getPanelTasks('inreview')} />
                    </Col>
                    <Col>
                        < TaskPanel type="done" label="Done" tasks={getPanelTasks('done')} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard