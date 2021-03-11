import { User } from './user.interface'

const loginService = async ( params:User ) => {
    try {
        const uri = `${process.env.REACT_APP_LOGIN_URL}`
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