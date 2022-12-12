import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/NavBar/Nav';
import ItemListContainer from './componentes/Item/ItemListConteiner';
import ItemDitailContainer from './componentes/itemDetalle/itemDitailContainer';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CartContextProvider} from "./context/cartContext"
import CartView from './componentes/CartVeiw/CartVeiw';
import PanelCliente from './componentes/PanelCliente/PanelCliente';



function App() {
 
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar/>
            <Routes>
          
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/detail/:idItem" element={<ItemDitailContainer/>}/>
              <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
              <Route path="/cart" element={<CartView />} />
              <Route path="/gracias/:idOrder" element={<PanelCliente />} />

                    
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
    
  );
}



export default App;
