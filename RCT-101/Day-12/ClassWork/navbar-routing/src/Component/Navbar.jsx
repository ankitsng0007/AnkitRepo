import React from "react";
import {Link} from "react-router-dom";
export const Navbar = ()=>{
return(
    <div style={{
        display:"flex",
        justifyContent:"space-around",
        width:"80%",
        margin:"auto"
    }}>
        <Link to="/">Home</Link>
        <Link to="/users">users</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </div>
)
}