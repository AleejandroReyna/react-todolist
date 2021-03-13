import {
    useState
} from 'react'
import {
    Form, Button
} from 'react-bootstrap'
import { TaskFormProps } from './taskFormProps.interface'
import { Task } from '../../services/task.interface'

const TaskForm = ({ task, onSubmit, action, disabled } : TaskFormProps) => {
    const {name, content, status} = task
    const [_name, setName] = useState(name)
    const [_content, setContent] = useState(content)
    const [_status, setStatus] = useState(status)

    
    const selectOptions = [{type: 'todo', label: 'To Do'}, {type: 'doing', label: 'Doing'},
                           {type: 'inreview', label: 'In Review'}, {type: 'done', label: 'Done'}]

    const _onSubmit = ():void => {
        let newTask:Task = {name: _name, content: _content, status: _status}
        onSubmit(newTask)
    }
    return (
        <Form>
            <Form.Group>
                <label>Name: </label>
                <Form.Control 
                    type="text" 
                    value={_name} 
                    onChange={e => setName(e.target.value)}
                    disabled={disabled} />
                    {!_name &&
                        <small>This field is required</small>
                    }
            </Form.Group>
            <Form.Group>
                <label>Content: </label>
                <Form.Control 
                    as="textarea" 
                    value={_content}
                    rows={5} 
                    onChange={e => setContent(e.target.value)}
                    disabled={disabled} />
                    {!_content &&
                        <small>This field is required</small>
                    }
            </Form.Group>
            <Form.Group>
                <label>Status:</label>
                <Form.Control 
                    as="select" 
                    value={_status}
                    disabled={disabled}
                    onChange={e => setStatus(e.target.value)}>
                    {selectOptions.map(option =>
                        <option value={option.type} key={`option-${option.type}`}>{option.label}</option>      
                    )}
                </Form.Control>
            </Form.Group>
            <Button 
                onClick={_onSubmit}
                disabled={disabled || !_name || !_content || !_status}
            >{action} Task</Button>
        </Form>
    )
}

export default TaskForm
