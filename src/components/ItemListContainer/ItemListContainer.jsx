import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import {useParams } from "react-router-dom"
import {db} from "../../services/config"
import { collection, getDocs, where, query } from "firebase/firestore"
import "../ItemListContainer/ItemListContainer.css"

const ItemListContainer = () => {
    const [productos, setProductos] =useState ([]);
    const {idCategory}=  useParams();

useEffect (( )=>{
  const misLibros = idCategory ? query (collection (db, "items"), where ("idCat", "==", idCategory))
  : collection (db, "items")
      getDocs (misLibros)
  .then (res=> {
    const nuevosLibros = res.docs.map (doc=>{
        const data = doc.data (); 
        return {id:doc.id,...data}
    })
     setProductos (nuevosLibros)
  })
   .catch (error => console.log (error))
}, [idCategory])


    return (
      <div>
      
      <h2 className="text-center">Nuestros Ebooks</h2>
          <ItemList productos={productos}/>

      </div>
    )
}

export default ItemListContainer