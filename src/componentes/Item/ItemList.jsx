import React from "react";
import Item from "./Item";
import "./itemList.css"

function ItemList({ productos }) {
  return (
    <div className="item-list">
      {productos.map((producto) => {
        return (
          <Item
            key={producto.id}

            id={producto.id}
            imagen={producto.imagen}
            titulo={producto.titulo}
            precio={producto.precio}
            stock={producto.stock}
            categoria={producto.categoria}
          /> 
        );
      })}
    </div>
  );
}

export default React.memo(ItemList);