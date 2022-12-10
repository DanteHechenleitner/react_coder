import { createContext , useState } from "react";

export const cartContext = createContext();

export function CartContextProvider({ children }) {
    const saludoContext = "Hola Context"

    const [cart , setCart] = useState([])

    function addToCart(productos, count){
        console.log(productos,count)
        let itemAlreadyInCart = cart.findIndex(
            (itemInCart) => itemInCart.id ===  productos.id
        )
    

        let newCart = [...cart]

        if (itemAlreadyInCart !== -1){
            newCart[itemAlreadyInCart].count += count;
            setCart(newCart);
        }else{
            productos.count = count;
            newCart.push(productos)
            setCart(newCart)
        }
    }

    function itemInCart(){
        let total = 0;
        cart.forEach((itemInCart) => (total = total + itemInCart.count));
        return total
    }

    function clear() {
        /* vaciar el estado */
    }

    function removeItem(idRevove) {
        /* cart.filter -> Filtrar todos los items con un ID diferente a "idRemove"   */
    }

    function priceInCart() {
        /* calcular el costo total de la compra */
    }

    function alreadyInCart(id){
        /* return true/false */
    }
    
    return(
        <cartContext.Provider
            value={{cart, addToCart, saludoContext, itemInCart}}
        >
            {children}
        </cartContext.Provider>
    )

}