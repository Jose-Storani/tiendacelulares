import React, { useEffect, useState } from 'react'
import { products } from '../../mocks/products'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [productoUnico, setProducto] = useState({});
    const { idProducto } = useParams();
    const idProductoNumerico = Number(idProducto);

    useEffect(() => {
        const getProducto = new Promise((res, rej) => {
            const productoEncontrado = products.find((prod) => prod.id === idProductoNumerico)
            setTimeout(() => {
                res(productoEncontrado);
            }, 500
            )
        }
        );

        getProducto.then((data) => {
            setProducto(data)
        })
    },
        [productoUnico])

    return (
        <div>
            <ItemDetail producto={productoUnico} />

        </div>
    )

}



export default ItemDetailContainer