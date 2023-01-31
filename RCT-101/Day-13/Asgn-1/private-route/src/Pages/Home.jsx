import React from "react";
import {Navigate} from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
export const Home=()=>{
    const {isAuth,toggleAuth} =React.useContext(AuthContext);
    if(isAuth){
        return(<Navigate to="/users"/>);
    }
    return(
        <>
        <h1>Wellcome To Dashboard</h1>
        <h3>To See The User,Please Log in First</h3>
        <button onClick={toggleAuth}
        style={{backgroundColor:"skyblue",
                fontSize:"larger",
            borderRadius:"10px"}}
        >Log In</button>
        </>
    );
};
