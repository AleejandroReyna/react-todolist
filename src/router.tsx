import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Home from './pages/home'
import Header from './components/header'
import Footer from './components/footer'


const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter