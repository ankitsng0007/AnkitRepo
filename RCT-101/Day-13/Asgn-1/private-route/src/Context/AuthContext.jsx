
import { createContext,useState } from "react";

export const AuthContext=createContext();
export const AuthContextProvider=({children})=>{
    const [isAuth,setIsAuth] = useState(true);
    const toggleAuth=()=>{
        setIsAuth(!isAuth)
    }
    return(
        <AuthContext.Provider value={{isAuth,toggleAuth}}>{children}</AuthContext.Provider>    )
}