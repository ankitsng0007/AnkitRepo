import React from "react";
import {NavLink} from "react-router-dom";
import { Home } from "./Home";
import { Products } from "./Products";
import { Contact } from "./Contact";

const links=[{path:"/",title:"Home"},
             {path:"/products",title:"Products"},
             {path:"/contact",title:"Contact"}]
export const Navbar=()=>{
    return(
        <div style={{display:"flex",justifyContent:"space-around"}}>
            {links.map((el)=>(
                <NavLink key={el.path} to={el.path}>{el.title}</NavLink>
            ))}
        </div>
    )
};