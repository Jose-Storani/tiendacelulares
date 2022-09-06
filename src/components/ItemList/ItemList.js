import React from 'react'
import Item from '../Item/Item'

const ItemList = ({listado}) => {
  return (
    <div className='itemList'>{listado.map((item) =>{
        return (
            <Item item= {item} key={item.id}/>
        )
    })}</div>
  )
}

export default ItemList