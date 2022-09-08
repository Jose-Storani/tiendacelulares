import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
    return (
        <div>
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <h5>$ {item.price}.-</h5>
            <Link to = {`/detail/${item.id}`}>
                <button>Ver Detalles</button>
            </Link>

        </div>
    )
}


export default Item