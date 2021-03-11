import refreshToken from './refreshToken.service'
import { RefreshToken } from './refreshToken.interface'
import { ServiceTask } from './serviceTask.interface'

const deleteTask = async (id: string ):Promise<ServiceTask> => {
    try {
        const url = `${process.env.REACT_APP_TASKS_URL}${id}/`
        const refreshRequest:RefreshToken = await refreshToken()
        if (refreshRequest.status !== 200) {
            return refreshRequest
        }
        const { access } = refreshRequest
        const request = await fetch(url, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access}`
            }
        })
        console.log(request)
        if(request.status === 204) {
            return {status: request.status}
        }
        return {
            status: request.status,
            errors: ['invalid token.']
        }
    } catch( e ) {
        return {status: 500, errors: [`${e}`]}
    }
}

export default deleteTask