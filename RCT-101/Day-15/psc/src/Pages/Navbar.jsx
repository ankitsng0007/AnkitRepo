import React from "react";
import {NavLink} from "react-router-dom";
import { Home } from "./Home";
import { Products } from "./Products";
import { Contact } from "./Contact";

const links=[{path:"/",title:"<Home/>"},
             {path:"/products",title:"<Products/>"},
             {path:"/contact",title:"<Contact/>"},
             {path:"/*",title:"<NotFound/>"}]
export const Navbar=()=>{
    return(
      <>
        
      </>
    )
};