import { useState } from 'react'
import Router from './router'
import './App.css'
import getUsername from './services/getUsername.service'
import { UserContext } from './contexts/user.context'


function App() {
  const [username, setUsername] = useState(getUsername())
  const changeUsername = (value:string) => {
    setUsername(value)
  }
  return (
      <UserContext.Provider value={{user: username, toggleUser: changeUsername}}>
        <Router />
      </UserContext.Provider>
  );
}

export default App;
