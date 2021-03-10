import { Task } from './task.interface'

export interface GetTasks {
    status: number, 
    data?: Task[],
    error?: string
}