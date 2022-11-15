
import { useState, useEffect } from "react";
import Item from "../Item/Item";
import {SingleItem}  from "../../service/serviceData";
import ItemDitail from "./itemDitail";

import { useParams } from "react-router-dom";

function ItemDitailContainer(){
    const [productos, setProductos] = useState([])
    let styleTamaño = { width: 540 }
    const styleText = {color: "black"};
    const { idItem } = useParams();

    async function getItemsAsync(){
        let respuesta = await SingleItem(idItem);
        setProductos(respuesta);
    }

    useEffect(() => {
        getItemsAsync();
    }, [])

    return( 
        <ItemDitail productos={productos} />
    )
}

export default ItemDitailContainer