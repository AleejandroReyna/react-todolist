import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import Dashboard from './pages/dashboard'
import CreateTask from './pages/tasks/createTask'
import EditTask from './pages/tasks/editTask'
import DetailTask from './pages/tasks/detailTask'
import Header from './components/header'
import Footer from './components/footer'
import PrivateRoute from './components/privateRoute'
import OnlyPublicRoute from './components/onlyPublicRoute'

const AppRouter = () => {
    console.log(PrivateRoute)
    return (
        <Router>
            <Header />
            <Switch>
                <OnlyPublicRoute path="/login/">
                    <Login />
                </OnlyPublicRoute>
                <OnlyPublicRoute path="/signup/">
                    <Signup />
                </OnlyPublicRoute>
                <PrivateRoute path="/dashboard/">
                    <Dashboard />
                </PrivateRoute>
                <PrivateRoute path="/tasks/create/">
                    <CreateTask />
                </PrivateRoute>
                <PrivateRoute path="/tasks/:id/edit/">
                    <EditTask />
                </PrivateRoute>
                <PrivateRoute path="/tasks/:id/">
                    <DetailTask />
                </PrivateRoute>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter