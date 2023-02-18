import React from "react";
import {Routes, Route} from "react-router-dom";
import { Listing } from "../Component/Listing";
import { ProductPage } from "../Component/ProductPage";

export const RoutePage=()=>{
    return(
        <div>
      <Routes>
        <Route path="/" exact element={<Listing/>} />
        <Route path="/items" exact element={<ProductPage/>} />
      </Routes>
      </div>
    )
}
