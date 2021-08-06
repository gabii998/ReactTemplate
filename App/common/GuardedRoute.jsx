  
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const GuardedRoute = ({ component: Component, auth, redirectTo: redirectTo, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                auth === true ? <Component {...props} /> : <Redirect to={redirectTo} />
            }
        />
    )
}

export default GuardedRoute