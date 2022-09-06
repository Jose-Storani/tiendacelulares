import React from 'react'

const ItemDetail = ({producto}) => {
  return (
    
        <div>
            <img src= {producto.img} alt=""/>
            <h3>{producto.title}</h3>
            <h5>$ {producto.price}.-</h5>
        </div>
    
  )
}

export default ItemDetail