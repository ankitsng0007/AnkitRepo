import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider({children}){
    const [theme,setTheme]=useState("dark");
    const toggleTheme =()=>{
        setTheme(theme==="light" ? "dark":"light")
    }
    return(
        <ThemeContext.Provider value={{theme:theme,toggleTheme:toggleTheme}}>{children}</ThemeContext.Provider>
    );
};
export default ThemeContextProvider;