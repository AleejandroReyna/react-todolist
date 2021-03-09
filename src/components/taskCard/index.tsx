import {
    Card,
    Button, ButtonGroup
} from 'react-bootstrap'
import { ChevronLeft, ChevronRight, EyeFill } from 'react-bootstrap-icons'
import { TaskProps } from './taskProps.interface'
import { Link } from 'react-router-dom'

const TaskCard = ({ task }:TaskProps) => {
    const {id, name, content, status } = task
    return (
        <Card className="mb-4">
            <Card.Header className="d-flex align-items-center justify-content-between">
                <h6>{name}</h6>
                <Link to={`/tasks/${id}/`} className="btn btn-primary"><EyeFill /></Link>
            </Card.Header>
            <Card.Body>
                {content}
            </Card.Body>
            <Card.Footer className="text-center">
                <ButtonGroup>
                    {status !== 'todo' &&
                        <Button variant='outline-secondary'><ChevronLeft /></Button>
                    }
                    {status !== 'done' &&
                        <Button variant='outline-secondary'><ChevronRight /></Button>
                    }
                </ButtonGroup>
            </Card.Footer>
        </Card>
    )
}

export default TaskCard