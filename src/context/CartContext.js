import { createContext, useState} from "react";
import React from 'react'

export const CartContext = createContext();


const CartProvider = ({children}) => {
    //*Esto se crea exclusivamente para tener estados y funciones que modifiquen ese estado.
    const [cart, setCart] = useState([]);
    
    
    
    const addToCart = (producto, cantidadProducto ) =>{
        //*en esta funcion, recibo como argumento, los valores enviados por ItemDetail, que son el producto y la cantida del producto seleccionado.
        //* Hacemos un spreed de PRODUCTO, para dejar "sueltos" todos los datos y poder agregar la cantidad, pero siempre envolver en objeto, array o algo.
        
        if (isInCart(producto.id)) {
            //*busco el producto y le sumo la cantidad.
            alert("Ese producto ya esta en el carrito")
            sumarCantidad(producto, cantidadProducto);
            
        } else {
            setCart([...cart,{...producto, cantidadProducto}]);
            
        }        
        
    }

    // Funcion para chequear si el item ya se encuentra en el carrito 
    const isInCart = (id) =>{
        return cart.some((item) => item.id === id)
    }

    const sumarCantidad = (producto, cantidadAgregada) => {
        const carritoActualizado = cart.map((prod) => {
            if (prod.id === producto.id) {
                const productoActualizado = {
                    ...prod,
                    cantidadProducto: prod.cantidadProducto + cantidadAgregada
                }
                return productoActualizado
                
            } else {
               return prod
            }
        })
        setCart(carritoActualizado)

    }
    
     //*borrar carrito
    const clearCart = () =>{
        setCart([])
    }
    
//* eliminar un solo producto

//* contar cuantos productos hay y mostrarlo en el cartwidget

//*Calcular el total del precio a pagar

  return (
        <CartContext.Provider value={{cart, addToCart, clearCart}}>
            {children}
            

        </CartContext.Provider>
  )
}

export default CartProvider