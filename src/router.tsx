import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Home from './pages/home'
import Header from './components/header'


const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter