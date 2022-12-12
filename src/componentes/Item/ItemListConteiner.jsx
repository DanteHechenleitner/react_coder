//import Item from "./Item"
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import getItems, { getItemsByCategory }  from "../../service/firestore";
import "./itemList.css"
import { useParams } from "react-router-dom";

import Loader from "../Loaders/Loaders";


function ItemListContainer(){
    const [productos, setProductos] = useState(null)
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

    return (
        <div className="item-list">
          {productos ? <ItemList productos={productos} /> : <Loader />}
        </div>
    );
}

export default ItemListContainer;

