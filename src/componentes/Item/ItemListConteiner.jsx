import Item from "./Item"
import { useState, useEffect } from "react";
import getItems, { getItemsByCategory }  from "../../service/firestore";
import "./itemList.css"
import { useParams } from "react-router-dom";


function ItemListContainer(){
    const [productos, setProductos] = useState([])
    const { idCategoria } = useParams();


    async function getItemsAsync(){
        if(!idCategoria){
            let respuesta = await getItems();
            setProductos(respuesta)
        }else{
            let respuesta = await getItemsByCategory(idCategoria)
            setProductos(respuesta)
        }
    }

    useEffect(() => {
        getItemsAsync();
    }, [idCategoria])

    return( 
    <div className="item-list" >
        {productos.map((producto) =>{
            return(
                <Item 
                  
                  key={producto.id}
                  id={producto.id}
                  imagen={producto.imagen}
                  titulo={producto.titulo}
                  precio={producto.precio}
                  categoria={producto.categoria}
                  stock={producto.stock}
                /> 
            )
        })}
        
   
        
    </div>
    )
}

export default ItemListContainer;

