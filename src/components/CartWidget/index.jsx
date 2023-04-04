import { useContext } from "react";
import carrito from "../../assets/cart.png";
import "./cartwidget.css";
import { Context } from "../../context";
import { NavLink } from "react-router-dom";

function CartWidget() {
  const { productsAdded } = useContext(Context);
  let valor = productsAdded.reduce((acc, elem) => acc + elem.quantity, 0);
  if (isNaN(valor)){
    valor = 0;
  }

  return (
    <NavLink to={"/cart"}>
      <div className="widget">
        <img src={carrito} alt="" className="imgCarrito" />
        {/* el reduce en la siguiente linea es para calcular la cantidad de poductos en el carrito, incluso repetidos */}
        <p className="nroCarrito">
          {valor}
        </p>
      </div>
    </NavLink>
  );
}

export default CartWidget;
