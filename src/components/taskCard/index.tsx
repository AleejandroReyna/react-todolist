import {
    Card,
    Button, ButtonGroup
} from 'react-bootstrap'
import { ChevronLeft, ChevronRight, EyeFill } from 'react-bootstrap-icons'
import { TaskProps } from './taskProps.interface'
import { Link } from 'react-router-dom'

const TaskCard = ({ task, variant, taskUpdate }:TaskProps) => {
    const {id, name, content, status } = task
    const types = ['todo', 'doing', 'inreview', 'done']

    const taskUp = () => {
        const _task = {...task, status: types[types.indexOf(task.status) + 1]}
        taskUpdate(_task)
    }

    const taskDown = () => {
        const _task = {...task, status: types[types.indexOf(task.status) - 1]}
        taskUpdate(_task)
    }


    return (
        <Card className="mb-4">
            <Card.Header className="d-flex align-items-center justify-content-between">
                <h6>{name}</h6>
                <Link to={`/tasks/${id}/`} className={`btn btn-${variant}`}><EyeFill /></Link>
            </Card.Header>
            <Card.Body>
                {content}
            </Card.Body>
            <Card.Footer className="text-center">
                <ButtonGroup>
                    {status !== 'todo' &&
                        <Button variant={variant} onClick={taskDown}><ChevronLeft /></Button>
                    }
                    {status !== 'done' &&
                        <Button variant={variant} onClick={taskUp}><ChevronRight /></Button>
                    }
                </ButtonGroup>
            </Card.Footer>
        </Card>
    )
}

export default TaskCard