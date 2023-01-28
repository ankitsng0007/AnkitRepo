import React from "react";
import { AppContext } from "../Context/AppContextProvider";

const Status=()=>{
    return(
        <div>Status
            <AppContext.Consumer>
                {(value)=>{
                    return <div>Token is : {value.token}</div>
                }}
            </AppContext.Consumer>
        </div>
    );
}
export default Status;