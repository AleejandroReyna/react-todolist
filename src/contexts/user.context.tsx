import { createContext } from 'react'

export const UserContext = createContext({
    user: "",
    toggleUser: ( value:string ) => {}
})