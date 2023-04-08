import { Context } from "../../context";
import { useContext } from "react";
import CartItem from "../CartItem";

function Cart() {
  const { productsAdded } = useContext(Context);
  let total = productsAdded.reduce((accum,elem)=> accum + (elem.quantity * elem.price),0)
  if (productsAdded.length > 0) {
    return (
      <div className="d-flex flex-column align-content-center">
        <h1 className="text-center mb-3">Carrito de Compras</h1>
        <div className="d-flex flex-column align-items-center gap-3">
          {productsAdded.map((elemento, index) => (
            <CartItem producto={elemento} key={elemento.id} />
          ))}
        </div>
        <div className="mt-3">
            <h3 className="text-center">Total de la compra: ${total}</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Carrito Vacio</h1>
      </div>
    );
  }
}

export default Cart;
