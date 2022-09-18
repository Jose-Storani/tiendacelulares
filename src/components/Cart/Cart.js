import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'
//import Form from '../Form/Form'

const Cart = () => {
	const { cart, clearCart, eliminarProducto, precioTotal } = useContext(CartContext);

	return (
		<div style={{
			display: "flex",
			flexDirection: "column",
			justifyContent: "center"
		}}>{cart.length !== 0 ?
			<>
				{cart.map((prod) => (
					<div key={prod.id} style={{
						display: "flex",
						justifyContent: "space-around",
						border: "1px solid black",
						borderRadius: "8px",
						padding: "8px",
						margin: "5px"
					}}>
						<h3>{prod.title} </h3>
						<h3>Cantidad: {prod.cantidadProducto}</h3>
						<h3>Precio: ${prod.price}.-</h3>
						<button style={{ width: "5rem" }} onClick={() => eliminarProducto(prod.id)}>Eliminar producto</button>
					</div>
				)

				)}


				<button style={{ width: "5rem", border: "1px green solid" }} onClick={clearCart}>Borrar Carrito</button>
				{/* <Form /> */}
				<h3>Total: ${precioTotal()}</h3>
			</> : <h3>Tu carrito esta vacio, has <Link to = "/"><strong>click aqui </strong></Link>para empezar a comprar</h3> }


		</div>
	)
}

export default Cart