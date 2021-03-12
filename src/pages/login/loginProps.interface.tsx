import { Alert } from '../../contexts/alert.interface'

export interface LoginProps {
    user: string,
    toggleUser(value:string): void,
    addAlert(alert:Alert): void | null
}