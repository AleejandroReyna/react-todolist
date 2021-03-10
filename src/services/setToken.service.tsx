import { SetToken } from './setToken.interface'

const setToken = ({access, refresh}:SetToken) => {
    console.log(access, refresh)
    localStorage.setItem('access', access)
    localStorage.setItem('refresh', refresh)
}

export default setToken