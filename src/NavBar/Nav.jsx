import Carrito from "./CardWidget"
import './Nav.css';


function Navbar(){
   return(
    <nav className="Nav">
        <ul>
            <li>
                <Carrito/>
            </li>
            <li>
                <a href="/">Tienda</a>
            </li>
            <li>
                <a href="/">Productos A</a>
            </li>
            <li>
                <a href="/">Productos B</a>
            </li>
        </ul>
    </nav>
   ) 
}


export default Navbar