import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({id, nombre, stock, precio, img}) => {
  return (
    <div className="cardProducto">
<img src={img} alt={nombre} />
<h3 className="Nombre">Nombre: {nombre}</h3>
<p>ID:{id}</p>
<p>Stock: {stock}</p>
<p>Precio: {precio}</p>

<Link className="Link"to={`/item/${id}`}><button className="btn btn-danger">Ver Detalles</button></Link>

    </div>
  )
}

export default Item