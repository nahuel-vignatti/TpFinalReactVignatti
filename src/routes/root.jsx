import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "../components/ItemsListContainer";
import { useParams } from "react-router-dom";
import "../index.css";

function Root() {
  const params = useParams();
  const isCategoryRoute = Boolean(params.id);

  return (
    <div className="contenedor">      
      <ItemListContainer
        isCategoryRoute={isCategoryRoute}
        categoryId={params.id}
      />
    </div>
  );
}

export default Root;
