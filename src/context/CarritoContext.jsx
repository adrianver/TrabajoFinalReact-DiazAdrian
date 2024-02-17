import { useState, createContext } from "react";

export const CarritoContext = createContext({
carrito: [],
total: 0,
cantidadTotal: 0
})

export const CarritoProvider = ({children}) => {

const [carrito, setCarrito] = useState ([]);
const [total, setTotal] = useState (0);
const [cantidadTotal, setCantidadTotal] = useState (0);  

console.log (carrito);
console.log ("Monto Total de la compra" , total);
console.log ("Cantidad de Items", cantidadTotal);

const agregarAlCarrito = (item, cantidad) => {

const productoExistente = carrito.find (prod=> prod.item.id === item.id);
if (!productoExistente) {
setCarrito (prev => [...prev, {item, cantidad}]);
setCantidadTotal (prev=> prev + cantidad);
setTotal (prev=>prev + (item.precio * cantidad))

 } else {
 const CarritoActualizado = carrito.map (prod => {
        if (prod.item.id === item.id){
        return {...prod , cantidad: prod.cantidad + cantidad};

} else {
        return prod;
}

 })
setCarrito (CarritoActualizado);
setCantidadTotal (prev=> (prev + cantidad));
setTotal (prev=>prev + (item.precio * cantidad))

}
}

const eliminarProducto = (id) => {

    const productoEliminado = carrito.find (prod=>prod.item.id===id);
    const CarritoActualizado = carrito.filter (prod => prod.item.id!==id);
    setCarrito (CarritoActualizado);
    setCantidadTotal (prev => prev - productoEliminado.cantidad);
    setTotal (prev => prev -(productoEliminado.item.precio * productoEliminado.cantidad ));

}

const vaciarCarrito = () => {
setCarrito ([]);
setTotal (0);
setCantidadTotal (0);
}

return (
<CarritoContext.Provider value={{carrito, cantidadTotal, total, agregarAlCarrito, eliminarProducto, vaciarCarrito}}>
    {children}
</CarritoContext.Provider>
 )

}