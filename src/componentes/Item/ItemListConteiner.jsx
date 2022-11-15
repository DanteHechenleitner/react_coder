import Item from "./Item"
import { useState, useEffect } from "react";
import getItems from "../../service/serviceData";
import "./itemList.css"
import { useParams } from "react-router-dom";

function ItemListContainer(){
    const [productos, setProductos] = useState([])
    const { idCategoria } = useParams();


    async function getItemsAsync(){
        let respuesta = await getItems(idCategoria);
        setProductos(respuesta);
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

export default ItemListContainer

