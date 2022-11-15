

function ItemDitail( { productos } ){
    let styleTamaño = { width: 540 }
    const styleText = {color: "black"};

    return( 
        <div class="card mb-3" style={styleTamaño}>
           <div class="row g-0">
              <div class="col-md-4">
                <img src={productos.imagen} class="img-fluid rounded-start" alt=""></img>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title" style={styleText}>{productos.titulo}</h5>
                  <p class="card-text" style={styleText}>Th content. This content is a little bit longer.</p>
                  <p class="card-text" style={styleText}><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
           </div>
      </div>
    )
}


export default ItemDitail