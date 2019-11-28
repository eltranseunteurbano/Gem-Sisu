import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as myRoutes from '../../constants/Routes';

const RedirectRoute = ({ component: Component, isAuthenticated, ...rest }) => {

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: myRoutes.LOGIN,
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    )
            }
        />
    );
};

export default RedirectRoute;
