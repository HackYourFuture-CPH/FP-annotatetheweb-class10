import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({Component: Component, ...rest}) => {
  const isLoggedIn = localStorage.getItem ('token');
  return (
    <Route
      {...rest}
      render={props => {
        if (isLoggedIn) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {from: props.location},
              }}
            />
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
