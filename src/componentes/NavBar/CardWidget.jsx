import React, { useContext } from "react";

import {cartContext} from "../../context/cartContext"

function Carrito(){

    const miContext = useContext(cartContext)
    
    return(
        <div>
            🛒<span style={{ color: "red" }}>{miContext.itemInCart()}</span>
        </div>
    )
}

export default Carrito