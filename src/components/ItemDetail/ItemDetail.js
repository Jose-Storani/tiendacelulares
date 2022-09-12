import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../Counter/ItemCount'

const ItemDetail = ({ producto }) => {
	const [cantidad, setCantidad] = useState(0)
	const onAdd = (arg) => {
		setCantidad(arg)

	}
	return (

		<div style={{ borderColor: "green", borderStyle: "solid" }}>
			<img src={producto.img} style={{ width: "500px", height: "500px" }} alt="CelularXiaomi" />
			<p>{producto.description}</p>
			<h3>{producto.title}</h3>
			<h5>$ {producto.price}.-</h5>
			
			{
				cantidad === 0 ? (
					<ItemCount stock={producto.stock} inicial={0} onAdd={onAdd} />) : 
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