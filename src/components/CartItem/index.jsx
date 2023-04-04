import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Context } from "../../context";
import "./cartitem.css";

function CartItem({ producto }) {
  const { removeItem } = useContext(Context);
  return (
    <Container className="d-flex flex-row align-items-center card__item justify-content-around w-50">
      <div>
        <h5>{producto.name}</h5>
        <h6>Cantidad: {producto.quantity}</h6>
        <h6>Precio Unitario: ${producto.precio}</h6>
        <h6>Total: ${producto.precio * producto.quantity}</h6>
      </div>
      <img
        src={producto.img}
        alt="imagen de producto"
        className="imgProduCart"
      />
      <button onClick={() => removeItem(producto.id)}>Borrar</button>
    </Container>
  );
}

export default CartItem;
