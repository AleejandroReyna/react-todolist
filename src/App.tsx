import { useState } from 'react'
import Router from './router'
import './App.css'
import getUsername from './services/getUsername.service'
import { UserContext } from './contexts/user.context'


function App() {
  const [username] = useState(getUsername())
  return (
      <UserContext.Provider value={username}>
        <Router />
      </UserContext.Provider>
  );
}

export default App;
