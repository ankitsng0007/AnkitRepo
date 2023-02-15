import React from "react";
import {Route} from "react-router-dom";
import { Listing } from "../Component/Listing";

export const route=()=>{
    return(
      <div>
        <Route path="/" exact component={Listing} />
        <Route path="/" exact component={Listing} />
      </div>
    )
}
