import { useState } from 'react'
import Router from './router'
import './App.css'
import getUsername from './services/getUsername.service'
import { UserContext } from './contexts/user.context'
import { AlertsContext } from './contexts/alerts.context'
import { Alert } from './contexts/alert.interface'


function App() {
  const [username, setUsername] = useState(getUsername())
  const [alerts, setAlerts] = useState<Alert[]>([])
  const changeUsername = (value:string) => {
    setUsername(value)
  }

  const addAlert = (alert: Alert) => {
    setAlerts([...alerts, alert])
  }

  const deleteAlert = (alert: Alert) => {
    let _alerts = [...alerts]
    _alerts.splice(_alerts.indexOf(alert), 1)
    setAlerts(_alerts)
  }

  return (
      <UserContext.Provider value={{user: username, toggleUser: changeUsername}}>
        <AlertsContext.Provider value={{alerts, addAlert, deleteAlert}}>
          <Router />
        </AlertsContext.Provider>
      </UserContext.Provider>
  );
}

export default App;
