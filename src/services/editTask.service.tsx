import refreshToken from './refreshToken.service'
import { RefreshToken } from './refreshToken.interface'
import { Task } from './task.interface'
import { ServiceTask } from './serviceTask.interface'

const editTask = async (id: string, task:Task):Promise<ServiceTask> => {
    try {
        const url = `${process.env.REACT_APP_TASKS_URL}${id}/`
        const refreshRequest:RefreshToken = await refreshToken()
        if (refreshRequest.status !== 200) {
            return refreshRequest
        }
        const { access } = refreshRequest
        const request = await fetch(url, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access}`
            },
            body: JSON.stringify(task)
        })
        console.log(request)
        if(request.status === 200) {
            const response = await request.json()
            return {status: request.status, data: response}
        }
        return {
            status: request.status,
            errors: ['invalid token.']
        }
    } catch(e) {
        return {
            status: 500,
            errors: [String(e)]
        }
    }
}

export default editTask