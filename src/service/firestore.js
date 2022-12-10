// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore, collection, getDocs, doc, getDoc, query, where} from "firebase/firestore"


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

    const docSnap = await getDoc(queryCategoria)

    const documentsData = docSnap.docs.map( (doc)  => {
        return {
            ...doc.data(),
            id: doc.id
        }
    })
    return documentsData
    console.log(documentsData)
}