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

  function removeItem(itemId) {
    let bandera = confirm("desea borrar?");
    if (bandera) {
      let arrayAux = productsAdded.filter((elem) => elem.id != itemId);
      setProductsAdded(arrayAux);
      console.log(productsAdded);
    }
  }
  function clear() {
    let bandera = confirm("desea vaciar el carrito?");
    if (bandera) {
      setProductsAdded([]);
    }
  }

  function isInCart(product) {
    return productsAdded.some((productAdded) => productAdded.id === product.id);
  }
  const value = {
    productsAdded,
    onAdd,
    removeItem,
    clear,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default CustomProvider;
