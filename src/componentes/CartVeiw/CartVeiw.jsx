import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import MyButton from "../MyBoton/MyButton";
import "./cartVeiw.css";
import { actualizarStock } from "../../service/firestore";
import { useNavigate } from "react-router-dom";
import CartForm from "./CartForm";

function CartView() {
  const { cart, removeItem, clearCart, priceInCart } = useContext(cartContext);
  let navigate = useNavigate();

  if (cart.length === 0) return <h1>Carrito Vacío</h1>;

  async function handleCheck(event, data){

    
    const order = {
      cliente : data,
      items: cart,
      total: priceInCart(),
      fecha: new Date(),
    }

    const orderId = await actualizarStock(order);
    navigate(`/gracias/${orderId}`);
    clearCart()
    
    
  }

  return (
    <div className="cart-container">
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.imagen} alt={item.titulo} />
          <h2>{item.titulo}</h2>
          <h4>${item.precio}</h4>
          <h4>unidades: {item.count}</h4>
          <h4>subtotal:  ${item.count * item.precio}</h4>
          <MyButton onTouchButton={() => removeItem(item.id)} className="btn btn-danger">
            X
          </MyButton>
        </div>
      ))}
      <CartForm onSubmit={handleCheck} />
      <MyButton className="btn btn-primary" onTouchButton={() => clearCart()}>Vaciar carrito</MyButton>
      
    </div>
  );
}

export default CartView;