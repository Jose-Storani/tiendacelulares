import React from 'react'
import Item from '../Item/Item'

const ItemList = (props) => {
  return (
    <div className='itemList'>{props.listado.map((item) =>{
        return (
            <Item item= {item}/>
        )
    })}</div>
  )
}

export default ItemList