import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {
  const { totalUnidades } = useContext(CartContext);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span className="material-icons">
        shopping_cart
      </span>
      {totalUnidades() !== 0 && <span>{totalUnidades()}</span>}

    </div>
  )
}

