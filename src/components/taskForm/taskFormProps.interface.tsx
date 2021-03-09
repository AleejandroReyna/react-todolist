import { Task } from '../../services/task.interface'

export interface TaskFormProps {
    task:Task,
    action: string,
    onSubmit(task: Task): any,
    disabled: boolean
}