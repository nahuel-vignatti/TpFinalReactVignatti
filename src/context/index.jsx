import { createContext, useState } from "react";

export const Context = createContext();

function CustomProvider({ children }) {
  const [productsAdded, setProductsAdded] = useState([]);  

  function onAdd(product, quantity) {
    const isAlreadyAdded = isInCart(product);

    if (isAlreadyAdded) {
      const productToModify = productsAdded.find(
        (produ) => produ.id === product.id
      );

      const productModified = {
        ...productToModify,
        quantity: productToModify.quantity + quantity,
      };

      setProductsAdded((prevState) =>
        prevState.map((produ) =>
          produ.id === product.id ? productModified : produ
        )
      );
    } else {
      setProductsAdded((prevState) =>
        prevState.concat({ ...product, quantity })
      );
    }
  }

  function isInCart(product) {
    return productsAdded.some((productAdded) => productAdded.id === product.id);
  }
  const value = {
    productsAdded,    
    onAdd,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default CustomProvider;
