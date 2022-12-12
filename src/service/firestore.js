// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, 
    orderBy,limit, documentId, writeBatch
} from "firebase/firestore"

import Swal from "sweetalert2"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqxhFdEQxBJgPnlebF2dlhcqiFyE_XPKs",
  authDomain: "react-dante-hechenleitner.firebaseapp.com",
  projectId: "react-dante-hechenleitner",
  storageBucket: "react-dante-hechenleitner.appspot.com",
  messagingSenderId: "715342888440",
  appId: "1:715342888440:web:19f5afc867374ce92caa0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)


/*export default function Database(){
    console.log(app)
}*/

/// Traer todos los documentos de firestore

export default async function getItems(){
    const colectionProductos = collection(DB,"productos")
    const documentos = await getDocs(colectionProductos)
    const documentsData = documentos.docs.map( (doc)  => {
        return {
            ...doc.data(),
            id: doc.id
        }
    })
    return documentsData
}

export async function SingleItem(idItem){
    const docRef = doc(DB, "productos", idItem)
    const docSnap = await getDoc(docRef)
    return{
        ...docSnap.data(),
        id: docSnap.id
    }

}

export async function getItemsByCategory(idCategoria){
    const colectionRef = collection(DB, "productos")
    const queryCategoria = query(colectionRef, where("categoria", "==", idCategoria))

    const docSnap = await getDocs(queryCategoria)

    const documentsData = docSnap.docs.map( (doc)  => {
        return {
            ...doc.data(),
            id: doc.id
        }
    })
    return documentsData
    console.log(documentsData)
}

export async function createOrder(order) {
    const collectionRef = collection(DB, "order");
  
    const docOrder = await addDoc(collectionRef, order);
  
    return docOrder.id;
}



export async function actualizarStock(order){
    const collectionRef = collection(DB, "order");
    const lote = writeBatch(DB)
    let arrayIds = order.items.map( item => item.id)
    const colectionProductosRef = collection(DB, "productos")
    const qury = query(colectionProductosRef, where(documentId(), "in", arrayIds))
    const productosSnap = await getDocs(qury)
    const productosDocs = productosSnap.docs
    
    productosDocs.forEach( doc => {
        let stockActual = doc.data().stock;
        let itemInCart = order.items.find(item => item.id === doc.id)
        let actualizarStock = stockActual - itemInCart.count
        if(actualizarStock < 0){
            
            Swal.fire({
                title: 'No hay stock disponible',
                showClass: {
                  popup: ''
                },
                hideClass: {
                  popup: ''
                }
            })
            throw new Error("No hay stock disponible para" + doc.id)
        }

        lote.update(doc.ref, {stock: actualizarStock})
    })

    const docRef = doc(collectionRef)

    lote.set(docRef, order)
    lote.commit()

    const docOrder = await addDoc(collectionRef, order);

  
    return docOrder.id;
}






async function exportArrayToFirestore(){

    const productos = [
    
        {
            titulo:"Dorri",
            precio:456,
            stock:60,
            categoria:"Upper-Crock",
            imagen:"https://http2.mlstatic.com/D_NQ_NP_662073-MLA50114374189_052022-O.webp",
            descripcion:"Khaki"
        },
        {
            
            titulo:"Harmon",
            precio:598,
            stock:89,
            categoria:"Upper-Crock",
            imagen:"https://http2.mlstatic.com/D_NQ_NP_988206-MLA49362415972_032022-O.webp",
            descripcion:"Purple"
        },
        {
            titulo:"Bernetta",
            precio:308,
            stock:97,
            categoria:"Master-Crock",
            imagen:"https://http2.mlstatic.com/D_NQ_NP_837030-MLA32884522359_112019-O.webp",
            descripcion:"Blue"
        },
        {
            
            titulo:"Helen-elizabeth",
            precio:940,
            stock:27,
            categoria:"Master-Crock",
            imagen:"https://http2.mlstatic.com/D_NQ_NP_927538-MLA50182409467_062022-O.webp",
            descripcion:"Indigo"
        },
        {
            titulo:"Gav",
            precio:629,
            stock:87,
            categoria:"Master-Crock",
            imagen:"https://http2.mlstatic.com/D_NQ_NP_603477-MLA49173893781_022022-O.webp",
            descripcion:"Maroon"
        },
        {
            
            titulo:"Sydney",
            precio:443,
            stock:30,
            categoria:"Pedigree",
            imagen:"https://http2.mlstatic.com/D_NQ_NP_831071-MLA49900705686_052022-O.webp",
            descripcion:"Fuscia"
        },
        {
            
            titulo:"Mirilla",
            precio:217,
            stock:29,
            categoria:"Pedigree",
            imagen:"https://http2.mlstatic.com/D_NQ_NP_683792-MLA49900692414_052022-O.webp",
            descripcion:"Puce"
        },
        {
            
            titulo:"Moina",
            precio:705,
            stock:8,
            categoria:"Capital Goods",
            imagen:"https://http2.mlstatic.com/D_NQ_NP_712012-MLA48678352782_122021-O.webp",
            descripcion:"Red"
        }
    ]
    const colectionRef = collection(DB,"productos")

    for (let item of productos) {

        let docOrder = await addDoc(colectionRef, item);
        console.log("Documento creado, id:", docOrder.id);
    }
}