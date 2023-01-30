import React from "react";
import {NavLink} from "react-router-dom";

const links=[{path:"/",title:"Home"},
             {path:"/users",title:"Users"},
             {path:"/about",title:"About"},
             {path:"/contact",title:"Contact"}];
export const Navbar = ()=>{
return(
    <div style={{
        display:"flex",
        justifyContent:"space-around",
    }}>
        {links.map((el)=>(
            <NavLink 
            style={({isActive})=>{
                return isActive ? {color:"red"} : {color:"black"}
            }}
             key={el.path} to={el.path}>{el.title}</NavLink>
        ))}
    </div>
)
}