import { RefreshToken } from './refreshToken.interface'

const refreshToken = async ():Promise<RefreshToken> => {
    const refresh:string = String(localStorage.getItem('refresh'))
    const url = String(process.env.REACT_APP_REFRESH_URL)
    const request = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ refresh })
    })
    const response = await request.json()
    if(request.status === 200) {
        return {status: request.status, access: response.access}
    } else {
        console.log(response)
        return {status: request.status, error: response.detail, codeError: response.code}
    }
}

export default refreshToken