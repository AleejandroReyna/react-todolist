import { Task } from './task.interface'

export interface ServiceTask {
    status: number,
    data?: Task,
    errors?: string[]
}