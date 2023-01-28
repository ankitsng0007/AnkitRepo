import React from "react";
import { AppContext } from "../Context/AppContextProvider";

const Status=()=>{
    const {isAuth,token}=React.useContext(AppContext);
    return(
        <div>Status
            <div>{isAuth ? `Token is ${token}`:`User is not registered.`}</div>
        </div>
    );
}
export default Status;