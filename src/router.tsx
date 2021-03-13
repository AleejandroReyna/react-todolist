import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { UserContext } from './contexts/user.context'
import Home from './pages/home'
import Login from './pages/login'
import Logout from './pages/logout'
import Signup from './pages/signup'
import Dashboard from './pages/dashboard'
import CreateTask from './pages/tasks/createTask'
import EditTask from './pages/tasks/editTask'
import DetailTask from './pages/tasks/detailTask'
import Header from './components/header'
import Footer from './components/footer'
import PrivateRoute from './components/privateRoute'
import OnlyPublicRoute from './components/onlyPublicRoute'
import Alerts from './components/alerts'
import { AlertsContext } from './contexts/alerts.context'

const AppRouter = () => {
    return (
        <Router>
            <UserContext.Consumer>
                {({user}) =>
                    <Header user={user} />
                }
            </UserContext.Consumer>
            
            <AlertsContext.Consumer>
                {({alerts, deleteAlert}) =>
                    <Alerts alerts={alerts} deleteAlert={deleteAlert} />
                }
            </AlertsContext.Consumer>
            <Switch>

                <OnlyPublicRoute path="/login/">
                    <AlertsContext.Consumer>
                        {( { addAlert } ) =>
                            <UserContext.Consumer>
                                {({user, toggleUser}) =>
                                    addAlert &&
                                        <Login user={user} toggleUser={toggleUser} addAlert={addAlert} />
                                }
                            </UserContext.Consumer>
                        }
                    </AlertsContext.Consumer>
                </OnlyPublicRoute>
                
                <PrivateRoute path="/logout/">
                    <AlertsContext.Consumer>
                        {( { addAlert } ) =>    
                            <UserContext.Consumer>
                                {({toggleUser}) =>
                                    <Logout toggleUser={toggleUser} addAlert={addAlert} />
                                }
                            </UserContext.Consumer>
                        }
                    </AlertsContext.Consumer>
                </PrivateRoute>
                
                <OnlyPublicRoute path="/signup/">
                    <AlertsContext.Consumer>
                        {( { addAlert } ) =>
                            <Signup addAlert={addAlert} />
                        }
                    </AlertsContext.Consumer>
                </OnlyPublicRoute>
                
                <PrivateRoute path="/dashboard/">
                    <AlertsContext.Consumer>
                        {( { addAlert } ) =>
                            <Dashboard addAlert={addAlert} />
                        }
                    </AlertsContext.Consumer>
                </PrivateRoute>
                
                <PrivateRoute path="/tasks/create/">
                <AlertsContext.Consumer>
                    {( { addAlert } ) =>
                        <CreateTask addAlert={addAlert} />
                    }
                    </AlertsContext.Consumer>
                </PrivateRoute>
                
                <PrivateRoute path="/tasks/:id/edit/">
                    <AlertsContext.Consumer>
                        {( { addAlert } ) =>
                            <EditTask addAlert={addAlert} />
                        }
                    </AlertsContext.Consumer>
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