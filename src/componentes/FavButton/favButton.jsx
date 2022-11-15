import React, { useState } from "react";

import "./favButton.css"

function FavButton(props){
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    let classNameFavBtn = isFavorite ? "card-favicon favorite" : "card-favicon";

    return (
      <button onClick={handleFavorite} className={classNameFavBtn}>
        {props.icon}
      </button>
    );
}

export default FavButton