import { useState } from "react";
import MyButton from "../MyBoton/MyButton";

export default function CartForm(props) {
  const [data, setData] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  function onInputChange(event) {
    let nameInput = event.target.name;
    let value = event.target.value;
    

    // dynamic properties
    let newData = { ...data };
    newData[nameInput] = value;
    setData(newData);
    console.log(newData)

  }

  function onSubmit(event) {
    if (data.nombre.length === 0) return;

    event.preventDefault();
    props.onSubmit(event, data);
    console.log(data)
  }

  return (
    <form onSubmit={onSubmit}>
      
      <div style={{ display: "flex", marginBottom: 8 }}>
        <label htmlFor="nombre" style={{ width: "100px", marginRight: 4 }}>
          Nombre
        </label>
        <input
          required
          value={data.nombre}
          name="nombre"
          type="text"
          onChange={onInputChange}
        />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label htmlFor="email" style={{ width: "100px", marginRight: 4 }}>
          Email
        </label>
        <input
          required
          value={data.email}
          name="email"
          type="email"
          onChange={onInputChange}
        />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label htmlFor="telefono" style={{ width: "100px", marginRight: 4 }}>
          Teléfono
        </label>
        <input
          required
          value={data.telefono}
          name="telefono"
          type="phone"
          onChange={onInputChange}
        />
      </div>

      <button
        disabled={data.nombre === "" || data.telefono === "" || data.email === ""}
        type="submit"
        className="btn btn-info"
      >
        Finalizar Compra
      </button>
    </form>
  );
}

