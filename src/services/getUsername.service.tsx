const getUsername = ():string => {
    let username = localStorage.getItem('username')
    return username ? username : ""
}

export default getUsername