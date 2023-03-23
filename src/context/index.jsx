import { createContext } from "react";
export const Context = createContext();

function CustomProvider({children}){
    return <Context.Provider value="Hola mundo">{children}</Context.Provider>
}

export default CustomProvider;