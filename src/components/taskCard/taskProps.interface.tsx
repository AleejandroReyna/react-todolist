import { Task } from '../../services/task.interface'

export interface TaskProps {
    task:Task,
    variant: string,
    taskUpdate( task:Task ): Promise<void> 
}