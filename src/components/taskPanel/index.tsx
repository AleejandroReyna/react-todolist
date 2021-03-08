import { TaskPanelProps } from './interface'
import TaskCard from '../taskCard'

const TaskPanel = ({ label, tasks }: TaskPanelProps) => {
    return (
        <article>
            <h5>{label}</h5>
            <section className="bg-light border rounded rounded-3 p-2">
                {tasks?.map(task =>
                    <TaskCard task={task} />
                )}
            </section>
        </article>
    )
}

export default TaskPanel