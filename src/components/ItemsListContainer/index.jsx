import "./itemlistcontainer.css";
// import Products from "../../mocks/products";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import ItemList from "../itemList";
import { useEffect, useState } from "react";

function ItemListContainer({ isCategoryRoute, categoryId }) {
  const [listaProdu, setListaProdu] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    if (isCategoryRoute) {
      const queryResult = query(
        itemsCollection,
        where("category", "==", categoryId)
      );

      getDocs(queryResult)
        .then((snapshot) => {
          const docs = snapshot.docs;
          setListaProdu(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => console.log({ error }));
    } else {
      getDocs(itemsCollection)
        .then((snapshot) => {
          const docs = snapshot.docs;
          setListaProdu(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
        .catch((error) => console.log({ error }));
    }
  }, [categoryId]);

  // useEffect(() => {
  //   const productosPromise = new Promise((resolve, reject) =>
  //     setTimeout(() => resolve(Products), 1000)
  //   );
  //   productosPromise
  //     .then((reponse) => {
  //       if (isCategoryRoute) {
  //         const productsFiltered = reponse.filter(
  //           (elem) => elem.category === categoryId
  //         );

  //         setListaProdu(productsFiltered);
  //       } else {
  //         setListaProdu(reponse);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, [categoryId]);

  return (
    <main className="cont">
      <ItemList productos={listaProdu} />
    </main>
  );
}

export default ItemListContainer;
