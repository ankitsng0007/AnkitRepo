import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const Home=()=>{
  const {isAuth,toggleAuth} = React.useContext(AuthContext);
  if(!isAuth){
    return <Navigate to="/login" />
  }
    return(
      <>
        <h1>Home Page</h1>
        <button onClick={toggleAuth}>Logout</button>
      </>
    )
};