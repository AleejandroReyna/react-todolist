const getToken = () => {
    try {
        let token = localStorage.getItem('access')
        console.log(token)
        return token
    } catch(e) {
        console.log(e)
        return null
    }
}

export default getToken