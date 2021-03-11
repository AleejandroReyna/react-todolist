import { Login } from './login.interface'

const loginService = async ( params:Login ) => {
    try {
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
    } catch(e) {
        return {status: 500, errors: [`${e}`]}
    }
}

export default loginService