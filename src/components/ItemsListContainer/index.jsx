import "./itemlistcontainer.css";
import Products from "../../mocks/products";
import ItemList from "../itemList";
import { useEffect, useState } from "react";

function ItemListContainer({ isCategoryRoute, categoryId }) {
  const [listaProdu, setListaProdu] = useState([]);

  useEffect(() => {
    const productosPromise = new Promise((resolve, reject) =>
      setTimeout(() => resolve(Products), 2000)
    );
    productosPromise
      .then((reponse) => {
        if (isCategoryRoute) {
          const productsFiltered = reponse.filter(
            (elem) => elem.category === categoryId
          );

          setListaProdu(productsFiltered);
        } else {
          setListaProdu(reponse);
        }
      })
      .catch((err) => console.log(err));
  }, [categoryId]);

  return (
    <main className="cont">
      <ItemList productos={listaProdu} />

    </main>
  );
}

export default ItemListContainer;
