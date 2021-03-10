import refreshToken from './refreshToken.service'
import { RefreshToken } from './refreshToken.interface'
import { Task } from './task.interface'
import { CreateTask } from './createTask.interface'

const createTask = async (task:Task):Promise<CreateTask> => {
    const url = String(process.env.REACT_APP_TASKS_URL)
    const refreshRequest:RefreshToken = await refreshToken()
    if (refreshRequest.status !== 200) {
        return refreshRequest
    }
    const { access } = refreshRequest
    const request = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access}`
        },
        body: JSON.stringify(task)
    })
    if(request.status === 201) {
        const response = await request.json()
        return {status: request.status, data: response}
    }
    return {
        status: request.status,
        errors: ['invalid token.']
    }
}

export default createTask
