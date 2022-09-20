import { createContext, useState} from "react";
import React from 'react'

export const CartContext = createContext();


const CartProvider = ({children}) => {
    //*Esto se crea exclusivamente para tener estados y funciones que modifiquen ese estado.
    const [cart, setCart] = useState([]);
    
    
    
    const addToCart = (producto, cantidadProducto ) =>{
        //*esta funcion, recibo como argumento, los valores enviados por ItemDetail, que son el producto y la cantidad del producto seleccionado.
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
                    cantidadProducto: cantidadAgregada
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

const eliminarProducto = (id) =>{
    const carritoFiltrado = cart.filter((prod) => prod.id !== id)
    setCart(carritoFiltrado)

}

//* Cantidad del producto en el carrito.

const encontrarCantidadProducto = (id) =>{
    const producto = cart.find ((prod) => prod.id === id);
        return producto?.cantidadProducto
        // optional chaining
    }



//* contar cuantos productos hay y mostrarlo en el cartwidget
    const totalUnidades = () =>{
        let acumulador =0 ;
        cart.forEach((prod) => {
            acumulador+= prod.cantidadProducto
        })
        return acumulador;
    }


//*Calcular el total del precio a pagar
const precioTotal = () =>{
    let acumulador = 0;
    cart.forEach((prod) => {
        acumulador += (prod.price * prod.cantidadProducto)
    })
    return acumulador;
}

  return (
        <CartContext.Provider value={{cart, addToCart, clearCart, eliminarProducto, encontrarCantidadProducto, precioTotal, totalUnidades}}>
            {children}
            

        </CartContext.Provider>
  )
}

export default CartProvider