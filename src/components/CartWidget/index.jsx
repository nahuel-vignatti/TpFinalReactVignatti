import { useContext } from "react";
import carrito from "../../assets/cart.png"
import "./cartwidget.css"
import { Context } from "../../context";

function CartWidget(){
    const{productsAdded} = useContext(Context);
    return (<div className="widget">
        <img src={carrito} alt="" className="imgCarrito"/>
        {/* el reduce en la siguiente linea es para calcular la cantidad de poductos en el carrito, incluso repetidos */}
        <p className="nroCarrito">{productsAdded.reduce((acc,elem)=> acc + elem.quantity,0)}</p>
    </div>)
}

export default CartWidget;