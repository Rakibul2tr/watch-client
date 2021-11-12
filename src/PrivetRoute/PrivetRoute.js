import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hoocks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    const {user,isloding}=useAuth();
    if(isloding){return isloding&&<div style={{width:'400px',margin:'auto'}}><CircularProgress color="secondary" /></div>}
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.email? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivetRoute;