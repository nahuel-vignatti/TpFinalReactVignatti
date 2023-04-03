import ItemCount from "../ItemCount";
import { Container,Button } from "react-bootstrap";
import "./itemdetail.css";
import { useState,useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../context";

function ItemDetail({ producto }) {
  const {onAdd} = useContext(Context);
  const [added, setAdded] = useState(0);

  function onAddProduct(cant){
    setAdded(cant);
    onAdd(producto,cant);
  }



  let textoDescriptivo;
  if (producto.category == "interior") {
    textoDescriptivo = "Interiores con buena luz";
  } else {
    if (producto.category == "exterior") {
      textoDescriptivo = "Exteriores, al sol";
    } else {
      textoDescriptivo = "Media Sombra";
    }
  }
  return (
    <article>
      <Container className="d-flex flex-row gap-5 ctnTotal">
        <div className="imgCtn">
          <img
            src={producto.img}
            alt="imagen de producto"
            className="imgProdu"
          />
        </div>
        <div className="infoProdu">
          <h2>{producto.name}</h2>
          <p>{producto.descripcion}</p>
          <p>
            <strong>Ubicacion: </strong>
            {textoDescriptivo}
          </p>
          {added == 0 && <ItemCount stock={producto.stock} precio={producto.precio} onAdd={onAddProduct}/>}
          <div className="ctas-container">
            {added >=1 &&(
              <NavLink to={"/cart"}>
                <Button variant="primary">Terminar Compra</Button>{" "}
              </NavLink>
            )}
          </div>  
          
        </div>
      </Container>
    </article>
  );
}

export default ItemDetail;
