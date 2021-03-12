import { createContext } from 'react'
import { Alert, AlertContextProps } from './alert.interface'

const initializeAlert:AlertContextProps = {
    alerts: [],
    addAlert: (alert:Alert) => {},
    deleteAlert: (index:number) => {}
}

export const AlertsContext = createContext(initializeAlert)