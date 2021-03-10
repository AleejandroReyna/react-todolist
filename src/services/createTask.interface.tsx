import { Task } from './task.interface'

export interface CreateTask {
    status: number,
    data?: Task,
    errors?: string[]
}