import refreshToken from './refreshToken.service'
import { RefreshToken } from './refreshToken.interface'
import { ServiceTask } from './serviceTask.interface'


const getTask = async (id: string):Promise<ServiceTask> => {
    const url = String(`${process.env.REACT_APP_TASKS_URL}${id}`)
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
        return { status: request.status, errors: [response.detail] }
    }
    return { status: request.status, data: response }
}

export default getTask