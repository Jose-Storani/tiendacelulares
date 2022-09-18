import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../Counter/ItemCount'
import {CartContext} from "../../context/CartContext"

const ItemDetail = ({ producto }) => {
	const [cantidad, setCantidad] = useState(0)
	const { addToCart, encontrarCantidadProducto } = React.useContext(CartContext);
	const onAdd = (arg) => {
		setCantidad(arg)
		addToCart(producto, arg); //*Con esta función estamos mandando a mi contexto, la informacion sobre el producto y la cantidad.
	}

	const quantity = encontrarCantidadProducto(producto.id)
	
	
	return (

		<div style={{ borderColor: "green", borderStyle: "solid" }}>
			<img src={producto.img} style={{ width: "500px", height: "500px" }} alt="CelularXiaomi" />
			<p>{producto.description}</p>
			<h3>{producto.title}</h3>
			<h5>$ {producto.price}.-</h5>
			
			{
				cantidad === 0 ? (
					<ItemCount stock={producto.stock} inicial={quantity} onAdd={onAdd} />) : 
					(
					<>
						<h5>La cantidad elegida es : {cantidad}</h5>
						<Link to="/cart">
						<button>Ir al carrito</button>
						</Link>
					</>
					)
			}

		</div>

	)
}

export default ItemDetail