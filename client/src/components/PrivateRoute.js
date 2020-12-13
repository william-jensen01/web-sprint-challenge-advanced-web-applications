import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...props }) => {
    return (
        <Route
        {...props}
        render={() => {
        // logic for checking if we have an auth token
            if (localStorage.getItem('token')) {
                return <Component />
            } else {
                return <Redirect to='/login' />
            }
        }}/>
    )
};

export default PrivateRoute;