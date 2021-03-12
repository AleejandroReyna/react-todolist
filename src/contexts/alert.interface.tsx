export interface Alert {
    content: string,
    variant: string
}

export interface AlertContextProps {
    alerts: Alert[],
    addAlert? (alert: Alert) : void,
    deleteAlert? (idx: number) : void
}