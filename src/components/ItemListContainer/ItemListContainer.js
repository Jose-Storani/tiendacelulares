import React, { useEffect, useState } from 'react'
import { products } from '../../mocks/products';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      setTimeout(() => {
        res(products);
      }, 2000
      )
    }
    );

    getProducts.then((data) => {
      setItems(data)
    })
  }, 
  [])

  return (
    <div>
      <h2>{props.saludo}</h2>
      <ItemList listado = {items}/>
    </div>
    
  )
};

export default ItemListContainer