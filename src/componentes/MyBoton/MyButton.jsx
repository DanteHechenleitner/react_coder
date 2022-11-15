import React, { useState, useEffect } from "react"

function MyButton(props){
    let [className, setClassName] = useState(props.className);

    useEffect(
        () => {
          console.log("Component mounting");
        }, 
    []);

    function handleClick() {
        setClassName("btn btn-danger");
    }

    return(
        <button onClick={handleClick} className={className}>
            Ver Más
        </button>
    )
}

export default MyButton;