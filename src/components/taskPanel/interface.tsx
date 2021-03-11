import { Task } from '../../services/task.interface'

export interface TaskPanelProps {
    type: string,
    label: string,
    tasks: Task[],
    loading: boolean,
    variant: string
}
