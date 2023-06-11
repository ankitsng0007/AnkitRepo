import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

const RequireAuth = ({children}) => {
    const isAuth = useSelector((store)=>store.AuthReducer.isAuth);
  if(!isAuth){
    return <Navigate to="/login" />
  }
  return children;
};

export default RequireAuth;
