import React from "react";
import { Routes,Route } from "react-router-dom";

export const Allroutes = ()=>{
return(
    <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/users" element={<h1>Users</h1>}></Route>
        <Route path="/about" element={<h1>About</h1>}></Route>
        <Route path="/contact" element={<h1>Contact Us</h1>} ></Route>
    </Routes>
)
}