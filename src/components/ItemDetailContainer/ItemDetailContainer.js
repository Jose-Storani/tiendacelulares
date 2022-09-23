import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { dataBase } from '../../firebaseconfig';
import {getDoc, doc, collection} from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [productoUnico, setProducto] = useState({});
    const [isLoading, setIsLoading] = useState(Boolean);
    const { id } = useParams();
    
    
    useEffect(() => {
        setIsLoading(true)
        const itemCollection = collection(dataBase,"productos");
        const ref = doc(itemCollection, id )
        getDoc(ref)
        .then((respuesta) => {
            setProducto({
                id:respuesta.id,
                ...respuesta.data()
            })
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() =>{
            setIsLoading(false)
        })
    },
        [id])

    return (
        <div>
        {
            isLoading ? <h3>Cargando productos</h3> :
            <ItemDetail producto={productoUnico} />
        }
        </div>
    )

}


export default ItemDetailContainer
