import MyButton from "../MyBoton/MyButton";
import React, { useState } from "react";

function ItemCount ({ stock, onAddToCart }){
    const [count , setCount] = useState(1);

    function handleAdd(){
        if (count < stock) setCount(count + 1);
    }

    function handleSubsTract(){
        if (count > 1) setCount (count - 1);
    }

    return(
        <div>
            <div>
                <MyButton className="btn btn-danger" onTouchButton={handleSubsTract} >
                    -
                </MyButton>
                <span> {count} </span>
                <MyButton className="btn btn-success" onTouchButton={handleAdd} >
                    +
                </MyButton>
            </div>
            <div>
                <MyButton onTouchButton={() => onAddToCart(count)} className="btn btn-primary">
                    Agregar al Carrito
                </MyButton>
            </div>
        </div>
    )
}

export default ItemCount