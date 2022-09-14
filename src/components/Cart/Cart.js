import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
//import Form from '../Form/Form'

const Cart = () => {
  const {clearCart} = useContext(CartContext);
  
  return (
    <div>
      <button onClick={clearCart}>Borrar Carrito</button>
      {/* <Form /> */}

    </div>
  )
}

export default Cart