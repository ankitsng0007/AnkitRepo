import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

function SingleBook() {
  const isAuth = useSelector((store)=>store.AuthReducer.isAuth);
  if(!isAuth){
    return <Navigate to="/login" />
  }
  return (
    <div>
      
    </div>
  );
}

export default SingleBook;
