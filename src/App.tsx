import { createContext } from 'react'
import Router from './router'
import './App.css'

const UserContext = createContext('')

function App() {
  return (
      <UserContext.Provider value=''>
        <Router />
      </UserContext.Provider>
  );
}

export default App;
