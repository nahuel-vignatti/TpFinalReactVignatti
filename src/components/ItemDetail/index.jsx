import ItemCount from "../ItemCount";
import { Container } from "react-bootstrap";
import "./itemdetail.css";

function ItemDetail({ producto }) {
  const onAdd = (cant) => {
    console.log("Se agregaron " + cant);
  };
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
          <p><strong>Ubicacion: </strong>{textoDescriptivo}</p>
          <ItemCount
            stock={producto.stock}
            precio={producto.precio}
            onAdd={onAdd}
          />
        </div>
      </Container>
    </article>
  );
}

export default ItemDetail;
