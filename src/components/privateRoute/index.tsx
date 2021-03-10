import { Route, Redirect } from 'react-router-dom'
import getToken from '../../services/getToken.service'

const PrivateRoute = ({children, ...rest}) => {
    return (
        <Route
            {...rest}
            render={({ location }) =>  getToken() ? children : <Redirect to={{pathname: "/login/", state: {from: location}}} />}
        />
    )
}

export default PrivateRoute