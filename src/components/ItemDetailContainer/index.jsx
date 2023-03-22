import "./itemdetailcontainer.css";
import Products from "../../mocks/products";
import { useId, useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
function ItemDetailContainer({itemId}){
    const[producto,setProducto] = useState([]);

    useEffect(() => {
        const productoPromise = new Promise((resolve, reject) =>
          setTimeout(() => resolve(Products), 1000)
        );
        productoPromise
          .then((reponse) => {

            const produBuscado = reponse.find(elem=>elem.id == itemId);
            setProducto(produBuscado);
          })
          .catch((err) => console.log(err));
      }, [itemId]);

    return <main className="itemDetail">
         <ItemDetail producto={producto}/> 
    </main>
}

export default ItemDetailContainer;