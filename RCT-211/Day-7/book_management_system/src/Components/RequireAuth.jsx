import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';

const RequireAuth = ({children}) => {
    const isAuth = useSelector((store)=>store.AuthReducer.isAuth);
    const location = useLocation();
    console.log("Inside Require Auth",location);

  if(!isAuth){
    return <Navigate to="/login" state={{data: location.pathname}}/>
  }
  return children;
};

export default RequireAuth;
