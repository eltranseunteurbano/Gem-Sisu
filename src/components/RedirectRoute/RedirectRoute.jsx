import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as myRoutes from '../../constants/Routes';
import { isUserAuthenticated } from "../../services/firebaseService";


export const PRIVATE_ROUTE_TYPE = "private";
export const PUBLIC_ROUTE_TYPE = "public";

const RedirectRoute = ({ component: Component, type, ...rest }) => {

    return (
        <>
            {
                type === PRIVATE_ROUTE_TYPE &&
                <Route
                    {...rest}
                    render={props =>
                        isUserAuthenticated() ? (
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
            }
            {
                type === PUBLIC_ROUTE_TYPE &&
                <Route
                    {...rest}
                    render={props =>
                        !isUserAuthenticated() ? (
                            <Component {...props} />
                        ) : (
                                <Redirect
                                    to={{
                                        pathname: myRoutes.HOME,
                                        state: {
                                            from: props.location
                                        }
                                    }}
                                />
                            )
                    }
                />
            }
        </>
    );
};

export default RedirectRoute;
