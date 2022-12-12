import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext"
import MyButton from "../MyBoton/MyButton";
import { Link } from "react-router-dom";

function ItemDitail( { productos } ){
    let styleTamaño = { width: 540 }
    const styleText = {color: "black"};
    const [isInCart, setIsInCart] = useState(false);
    const {addToCart, cart} = useContext(cartContext)

    function onAddToCart(count){
      setIsInCart(count);
      addToCart(productos, count)
    }    

    let itemInContex = cart.find( itemInCar => itemInCar.id === productos.id)
    let stockDisponible = itemInContex !== undefined ? productos.stock - itemInContex.count : productos.stock

    return( 
        <div class="card mb-3" style={styleTamaño}>
           <div class="row g-0">
              <div class="col-md-4">
                <img src={productos.imagen} class="img-fluid rounded-start" alt=""></img>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title" style={styleText}>{productos.titulo}</h5>
                  <p class="card-text" style={styleText}>Th content. This content is a little bit longer.</p>
                  <p class="card-text" style={styleText}><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                {isInCart ? (
                  <Link to="/cart">
                    <MyButton className="btn btn-primary">Ir al Carrito</MyButton>
                  </Link> ) :
                  (
                  <ItemCount 
                  onAddToCart={onAddToCart}
                  stock={stockDisponible}
                  /> 
                  )
                }
               
              </div>
           </div>
        </div>
      )
}


export default ItemDitail