import { Login } from './login.interface'

const loginService = async ( params:Login ) => {
    const uri = String(process.env.REACT_APP_LOGIN_URL)
    const request = await fetch(uri, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
    const response = await request.json()
    return {status: request.status, response}
}

export default loginService