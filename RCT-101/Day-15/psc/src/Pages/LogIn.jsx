import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const LogIn=()=>{
    const {isAuth,toggleAuth}=React.useContext(AuthContext);
    if(isAuth){
       return <Navigate to="/products" />
    }
    return(
        <div>
            <h1>Log In</h1>
            <h3>For Log in Click Here</h3>
            <button onClick={toggleAuth}>Log In</button>
        </div>
    )
}