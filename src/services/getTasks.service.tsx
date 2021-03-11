import refreshToken from './refreshToken.service'
import { RefreshToken } from './refreshToken.interface'
import { GetTasks } from './getTasks.interface'

const getTasks = async ():Promise<GetTasks> => {
    try {
        const url = String(process.env.REACT_APP_TASKS_URL)
        const refreshRequest:RefreshToken = await refreshToken()
        if (refreshRequest.status !== 200) {
            return refreshRequest
        }
        const { access } = refreshRequest
        const request = await fetch(url, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access}`
            },
        })
        const response = await request.json()
        if(request.status !== 200) {
            return { status: request.status, error: response.detail }
        }
        return { status: request.status, data: response }
    } catch(e) {
        return {status: 500, error: String(e)}
    }
} 

export default getTasks