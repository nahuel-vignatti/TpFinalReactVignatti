import { useContext } from "react";
import carrito from "../../assets/cart.png"
import "./cartwidget.css"
import { Context } from "../../context";

function CartWidget(){
    const{productsAdded} = useContext(Context);
    return (<div className="widget">
        <img src={carrito} alt="" className="imgCarrito"/>
        <p className="nroCarrito">{productsAdded.length}</p>
    </div>)
}

export default CartWidget;