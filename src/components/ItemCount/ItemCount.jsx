import { useState} from "react";
import { Link } from "react-router-dom";
import "../ItemCount/ItemCount.css"


const ItemCount= ({inicial, stock, funcionAgregar}) => {
  
const [contador,setContador] = useState(1);

const incrementar = () => {
    if (contador < stock) {
        setContador (contador+1);
}
}
const decrementar = () => {
if (contador > inicial) {
    setContador (contador-1);
}
}
    return (
    <>  
    <div className="contador-container">
<button className="btn btn-info" onClick={decrementar}> - </button>
<p> {contador} </p>
<button className="btn btn-primary" onClick={incrementar}> + </button>

    </div>
    <div className="contador-container">
<button className="btn btn-dark"style={{margin: "30px", color: "white"}} onClick={() => funcionAgregar(contador) }>Agregar al Carrito </button>
    </div>
    <div className="contador-container">
    <Link to="/" className="btn btn-dark">Volver</Link>
    </div>
    </>
  )
}


export default ItemCount