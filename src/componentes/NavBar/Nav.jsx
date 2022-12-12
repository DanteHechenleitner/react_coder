
import Carrito from "./CardWidget"
import './Nav.css';
import { Link } from "react-router-dom";

function Navbar(){
   return(
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <Link class="navbar-brand" to="/">
                <img src="/logo.png" width={75} height={75} />
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/categoria/Upper-Crock">Upper Crock</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/categoria/Master-Crock">Master Crock</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/categoria/Pedigree">Pedigree</Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> <Carrito/> </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
   ) 
}


export default Navbar