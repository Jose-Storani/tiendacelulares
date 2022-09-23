import { createContext, useState } from "react";
import React from 'react'
export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (producto, cantidadProducto) => {
        if (isInCart(producto.id)) {
            alert("Ese producto ya esta en el carrito")
            sumarCantidad(producto, cantidadProducto);
        }
        else {
            setCart([...cart, { ...producto, cantidadProducto }]);
        }
    }


    const isInCart = (id) => {
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


    const clearCart = () => {
        setCart([])
    }

    const eliminarProducto = (id) => {
        const carritoFiltrado = cart.filter((prod) => prod.id !== id)
        setCart(carritoFiltrado)

    }

    const encontrarCantidadProducto = (id) => {
        const producto = cart.find((prod) => prod.id === id);
        return producto?.cantidadProducto
    }

    const totalUnidades = () => {
        let acumulador = 0;
        cart.forEach((prod) => {
            acumulador += prod.cantidadProducto
        })
        return acumulador;
    }

    const precioTotal = () => {
        let acumulador = 0;
        cart.forEach((prod) => {
            acumulador += (prod.price * prod.cantidadProducto)
        })
        return acumulador;
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, eliminarProducto, encontrarCantidadProducto, precioTotal, totalUnidades }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider