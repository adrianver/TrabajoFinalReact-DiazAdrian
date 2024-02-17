import CartWidget from "../CartWidget/CartWidget";
import { Link,NavLink } from "react-router-dom";
import "bootstrap"
import "./Navbar.css";  

const NavBar = () => {
  return (
    <header>
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <Link to="/" className="navbar-brand">
    <img src="../img/logo.jpg" alt="ebookTandil logo" className="logo"/>
  </Link>
  <div className="container-fluid">
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/category/Literatura" className="nav-link">Literatura</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category/Humanidades" className="nav-link">Humanidades</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category/Ciencia" className="nav-link">Ciencia</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category/Juvenil" className="nav-link">Juvenil</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category/Estilo de Vida" className="nav-link">Estilo de Vida</NavLink>
        </li>
        <li className="nav-item">
        <CartWidget/>
        </li>
      </ul>
      
    </div>
  </div> 
</nav>

</header>

)
}
export default NavBar   
      
    