import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hoocks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {user,isloding,admin}=useAuth();
    if(isloding){return isloding&&<div style={{width:'400px',margin:'auto'}}><CircularProgress color="secondary" /></div>}
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.email && admin?(
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default AdminRoute;