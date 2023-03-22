import "./itemcount.css";
import { Button, Container } from "react-bootstrap";
import { useState } from "react";
function ItemCount({ stock, precio, onAdd }) {
  const [cant, setCant] = useState(1);

  const sumar = () => {
    if (stock > cant) setCant(cant + 1);
  };
  const restar = () => {
    if (cant > 1) setCant(cant - 1);
  };
  const agregar = () => {
    if (stock > 0) onAdd(cant);
  };
  return (
    <Container fluid className="d-flex flex-column align-items-center ctnCount">
        <h4>Precio: ${precio}</h4>
      <p>
        <strong>Unidades Disponibles: </strong>
        {stock}
      </p>
      
      <div className="lineaBotones">
        <Button variant="light" onClick={restar} className="botonCant">
          -
        </Button>{" "}
        <h4>{cant}</h4>
        <Button variant="light" onClick={sumar} className="botonCant">
          +
        </Button>{" "}
      </div>
      <Button variant="primary" onClick={agregar}>
        Agregar Al carrito
      </Button>{" "}
    </Container>
  );
}

export default ItemCount;
