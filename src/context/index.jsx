import { createContext, useState } from "react";

export const Context = createContext();

function CustomProvider({children}){

    const [itemsAddedQuantity, setItemsAddedQuantity] = useState(0);

    const onAdd = () => {
        setItemsAddedQuantity((oldState) => oldState +1);
    }

    const onRemove = () => {
        setItemsAddedQuantity((oldState) => oldState -1);
    }

    const value = {
        itemsAddedQuantity,
        onAdd,
        onRemove,
    }

    return <Context.Provider value={value}>{children}</Context.Provider>
}

export default CustomProvider;