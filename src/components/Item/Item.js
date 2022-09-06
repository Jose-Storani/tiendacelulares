import React from 'react'

const Item = ({item}) => {
    return (
        <div>
            <img src= {item.img} alt=""/>
            <h3>{item.title}</h3>
            <h5>$ {item.price}.-</h5>
        </div>
    )
}


export default Item