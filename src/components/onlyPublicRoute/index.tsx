import { Route, Redirect } from 'react-router-dom'
import getToken from '../../services/getToken.service'

const OnlyPublicRoute = ({children, ...rest}) => {
    return (
        <Route
            {...rest}
            render={({ location }) =>  !getToken() ? children : <Redirect to={{pathname: "/dashboard/", state: {from: location}}} />}
        />
    )
}

export default OnlyPublicRoute