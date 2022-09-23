import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../Counter/ItemCount'
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ producto }) => {
	const [cantidad, setCantidad] = useState(0)
	const { addToCart, encontrarCantidadProducto } = React.useContext(CartContext);

	const onAdd = (arg) => {
		setCantidad(arg)
		addToCart(producto, arg);
	}

	const quantity = encontrarCantidadProducto(producto.id)

	return (
		<div style={{ textAlign: "center" }}>
			<img src={producto.img} style={{ width: "400px", height: "400px" }} alt="Celular Xiaomi" />
			<h3>{producto.title}</h3>
			<p>{producto.description}</p>
			<h4>$ {producto.price}.-</h4>

			{cantidad === 0 ? (
				<ItemCount stock={producto.stock} inicial={quantity} onAdd={onAdd} />) :
				(
					<>
						<h4>Su producto fue agregado al carrito. <br></br>
							La cantidad elegida es : {cantidad}</h4>
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