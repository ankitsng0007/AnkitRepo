import React from "react";
import {Route,Routes} from "react-router-dom";
import { Contact } from "../Pages/Contact";
import { Home } from "../Pages/Home";
import { Products } from "../Pages/Products";

export const AllRoutes=()=>{
    return(
        <div>
            <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
        </div>
    )
}