import { createContext,useState } from "react";

export const AppContext = createContext();

function AppContextProvider({children}){
    const[isAuth,setIsAuth]=useState(false);
    const[token,setToken]=useState("abcde");
    const value={isAuth,token,setIsAuth,setToken}
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
export default AppContextProvider;