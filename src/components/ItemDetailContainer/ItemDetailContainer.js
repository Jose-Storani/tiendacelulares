import React, { useEffect, useState } from 'react'
import { products } from '../../mocks/products'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [productoUnico, setProducto] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const idProductoNumerico = Number(id);
    
    useEffect(() => {
        const getProducto = new Promise((res, rej) => {
            const productoEncontrado = products.find((prod) => prod.id === idProductoNumerico)
            setTimeout(() => {
                res(productoEncontrado);
            }, 1000
            )
        }
        );

        getProducto.then((data) => {
            setProducto(data)
        })
        .catch((error) => {
            console.log(error);
        }).finally(() =>{
            setIsLoading(false)
        })
    },
        [productoUnico])

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