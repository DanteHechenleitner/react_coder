import productos from "../data/data";

function getItems(idCategoria){
    return new Promise((resolve) => {
        if (idCategoria === undefined){
            setTimeout(() => {
                resolve(productos);
            }, 1000)
        }else{
            setTimeout(() => {
                let itemsRequested = productos.filter(
                  (item) => item.categoria === idCategoria
                );
                resolve(itemsRequested);
            }, 1000);
        }

    })
}


export function SingleItem(idParam){
    return new Promise((resolve, reject) => {
        let itemRequested = productos.find((item) => item.id === Number(idParam));

        if (itemRequested === undefined) reject("Item no encontrado");

        setTimeout(() => {
            resolve(itemRequested);
        }, 1000)
    })
}

export default getItems;
