import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {CarritoProvider} from "./context/CarritoContext";
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
import "bootstrap/dist/css/bootstrap.min.css"


const App = () => {
  return (
    <>
    <BrowserRouter>
    <CarritoProvider>
      <NavBar/>
        <Routes>
          <Route path="/" element ={<ItemListContainer/>}/>
          <Route path="/category/:idCategory" element ={<ItemListContainer/>}/>
          <Route path="/item/:idItem" element ={<ItemDetailContainer/>}/> 
          <Route path="/cart" element= {<Cart/>}/>
          <Route path="/checkout" element= {<Checkout/>}/>        
                    
        </Routes>
        </CarritoProvider>
      </BrowserRouter>
     
      <Footer/>
    </>
    
  )
}

export default App