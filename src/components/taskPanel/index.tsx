import { TaskPanelProps } from './interface'
import TaskCard from '../taskCard'
import { Spinner } from 'react-bootstrap'

const TaskPanel = ({ label, tasks, loading }: TaskPanelProps) => {
    return (
        <article>
            <h5>{label}</h5>
            <section className="bg-light border rounded rounded-3 p-2">
                {loading ?
                    <div className="text-center">
                        <Spinner animation="border" variant="primary" />
                    </div>
                :
                    tasks?.map(task =>
                        <TaskCard task={task} key={`task-${task.id}`} />
                    )
                }
            </section>
        </article>
    )
}

export default TaskPanel