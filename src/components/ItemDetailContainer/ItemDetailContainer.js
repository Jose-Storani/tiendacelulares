import React, { useEffect, useState } from 'react'
import { producto } from '../../mocks/products'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [producto1, setProducto] = useState({});

    useEffect(() => {
        const getProducto = new Promise((res, rej) => {
            setTimeout(() => {
                res(producto);
            }, 2000
            )
        }
        );

        getProducto.then((data) => {
            setProducto(data)
        })
    },
        [])

    return (
        <div>
            <ItemDetail producto={producto1} />

        </div>
    )

}



export default ItemDetailContainer