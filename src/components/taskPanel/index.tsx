import { TaskPanelProps } from './interface'
import TaskCard from '../taskCard'
import { Spinner } from 'react-bootstrap'

const TaskPanel = ({ label, tasks, loading, variant, taskUpdate }: TaskPanelProps) => {
    return (
        <article>
            <h5>{label}</h5>
            <section className="bg-light border rounded rounded-3 p-2">
                {loading ?
                    <div className="text-center">
                        <Spinner animation="border" variant={variant} />
                    </div>
                :
                    tasks.length > 0 ?
                        tasks?.map(task =>
                            <TaskCard task={task} key={`task-${task.id}`} variant={variant} taskUpdate={taskUpdate} />
                        )
                    :
                        <div className="text-center"><small>The panel has not tasks!</small></div>
                }
            </section>
        </article>
    )
}

export default TaskPanel