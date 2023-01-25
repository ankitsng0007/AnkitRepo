import { Children } from "react";
import { createContext } from "react";

export const AppContext = createContext();

function AppContextProvider({children}){
    return <AppContext.Provider>{Children}</AppContext.Provider>
}
export default AppContextProvider;