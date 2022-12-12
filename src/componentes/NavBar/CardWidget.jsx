import React, { useContext } from "react";

import {cartContext} from "../../context/cartContext"

import { Link } from "react-router-dom";

function Carrito(){

    const miContext = useContext(cartContext)
    
    return(
        <div>
            <Link to="/cart" >
                🛒
            </Link>
            <span style={{ color: "red" }}>{miContext.itemInCart()}</span>
        </div>
    )
}

export default Carrito