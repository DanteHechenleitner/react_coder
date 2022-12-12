
import { useState, useEffect } from "react";
import Item from "../Item/Item";
import {SingleItem}  from "../../service/firestore";
import ItemDitail from "./itemDitail";
import Loader from "../Loaders/Loaders";
import { useParams } from "react-router-dom";

function ItemDitailContainer(){
    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    let styleTamaño = { width: 540 }
    const styleText = {color: "black"};
    const { idItem } = useParams();

    async function getItemsAsync(){
        SingleItem(idItem).then((respuesta) => {
            setProductos(respuesta);
            setIsLoading(false);
        });
    }

    useEffect(() => {
        getItemsAsync();
    }, [])

    if (isLoading) return <Loader />;

    return( 
        <ItemDitail productos={productos} />
    )
}

export default ItemDitailContainer