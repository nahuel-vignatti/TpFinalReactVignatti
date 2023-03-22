import carrito from "../../assets/cart.png"
import "./cartwidget.css"

function CartWidget(){
    return (<div className="widget">
        <img src={carrito} alt="" className="imgCarrito"/>
        <p className="nroCarrito">03</p>
    </div>)
}

export default CartWidget;