import { createContext, useState } from "react";

export const Context = createContext();

function CustomProvider({children}){

    const [productsAdded, setProductsAdded] = useState([]);
    
    function onAdd(product,quantity){
        setProductsAdded((prevState)=> prevState.concat(product))
    }
    const value = {
        productsAdded,
        onAdd,
    }

    return <Context.Provider value={value}>{children}</Context.Provider>
}

export default CustomProvider;