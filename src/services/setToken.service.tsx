import { SetToken } from './setToken.interface'

const setToken = ({access, refresh, username}:SetToken) => {
    console.log(access, refresh)
    localStorage.setItem('access', access)
    localStorage.setItem('refresh', refresh)
    localStorage.setItem('username', username)
}

export default setToken