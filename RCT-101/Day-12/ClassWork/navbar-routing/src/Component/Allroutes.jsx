import React from "react";
import { Routes,Route } from "react-router-dom";
import  {Home } from "../Pages/Home";
import { Users } from "../Pages/Users";
import { About } from "../Pages/About";
import { Contact } from "../Pages/Contact";
import { SingleUserPage } from "../Pages/SingleUserPage";

export const Allroutes = ()=>{
return(
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>} ></Route>
        <Route path="/users/:id" element={<users/>}></Route>
    </Routes>
)
}