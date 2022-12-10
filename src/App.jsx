import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/NavBar/Nav';
import ItemListContainer from './componentes/Item/ItemListConteiner';
import ItemDitailContainer from './componentes/itemDetalle/itemDitailContainer';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CartContextProvider} from "./context/cartContext"



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
                    
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
    
  );
}



export default App;
