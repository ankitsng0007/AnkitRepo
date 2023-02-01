import React from "react";
import {Route,Routes} from "react-router-dom";
import { Contact } from "../Pages/Contact";
import { Home } from "../Pages/Home";
import { Products } from "../Pages/Products";
import { LogIn } from "../Pages/LogIn";
import { NotFoundPage } from "../Pages/NotFound";
import { PrivateRoute } from "./PrivateRoute";

export const AllRoutes=()=>{
    return(
        <div>
            <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/products" element={
            <PrivateRoute>
                <Products/>
            </PrivateRoute>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/login" element={<LogIn/>}></Route>
            <Route path="*" element={<NotFoundPage/>}></Route>
            </Routes>
        </div>
    )
}