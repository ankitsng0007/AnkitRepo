import { createContext,useState } from "react";

export const AppContext = createContext();

function AppContextProvider({children}){
    const[isAuth,setIsAuth]=useState(false);
    const[token,setToken]=useState("abcde");
    const handleLogIn=(userName)=>{
        setIsAuth(true);
        setToken(Date.now()+userName);
    }
    const value={isAuth,token,handleLogIn}
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
export default AppContextProvider;