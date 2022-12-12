import React, { useEffect} from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2"



function PanelCliente() {
  const idOrder = useParams().idOrder;



  useEffect(()=>{
    gracias()
  },)

  const gracias = () =>{
    Swal.fire({
      title: 'Gracias por tu compra',
      text: 'El id de tu compra es:' + `${idOrder}`,
      imageUrl: '/logo.png',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }

  return (
    <div style={{ color: "black" }}>
      <h1>Gracias por tu compra</h1>
      <h3>
        El id de tu compra es: <strong>{idOrder}</strong>
      </h3>
    </div>
  );
}

export default PanelCliente;
