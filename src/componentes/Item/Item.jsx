import MyButton from "../MyBoton/MyButton";

import FavButton from "../FavButton/favButton";
import "./itemList.css"

import { Link } from "react-router-dom";

function Item(props){
    let styleTamaño = { width: 288}
    const styleText = {color: "black"};
    const urlDetalle = `/detail/${props.id}`
    return(
        <div class="card" >
            <FavButton icon="♥"/>
            <img src={props.imagen} class="card-img-top" alt={props.titulo}></img>
            <div class="card-body" >
                <h5 class="card-title" style={styleText}>{props.titulo}</h5>
                <p class="card-text" style={styleText}>{"$"+props.precio}</p>
                <Link to={urlDetalle}>
                    <MyButton className="btn btn-primary">
                        Ver Más
                    </MyButton>
                </Link>
            </div>
        </div>
    )
}

export default Item