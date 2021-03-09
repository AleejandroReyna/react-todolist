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


const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/login/">
                    <Login />
                </Route>
                <Route path="/signup/">
                    <Signup />
                </Route>
                <Route path="/dashboard/">
                    <Dashboard />
                </Route>
                <Route path="/tasks/create/">
                    <CreateTask />
                </Route>
                <Route path="/tasks/:id/edit/" render={props => <EditTask {...props} />}/>
                <Route path="/tasks/:id/" render={props => <DetailTask {...props} />}/>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter