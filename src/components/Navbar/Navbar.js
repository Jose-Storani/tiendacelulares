import React from 'react'
import { CartWidget } from './CartWidget'
import { NavLink } from 'react-router-dom'
const Navbar = (props) => {
	if (props.isHeader) {
		return (
			<nav>
				<h3 className='titulo'>
					<NavLink to="/tiendacelulares" style={{ textDecoration: "none" }}>Cybertron</NavLink>
				</h3>
				<ul>
					<li>
						<NavLink to="/category/baja">Gama Baja</NavLink>
					</li>

					<li>
						<NavLink to="/category/media">Gama Media</NavLink>
					</li>

					<li>
						<NavLink to="/category/alta">Gama Alta</NavLink>
					</li>

				</ul>
				<NavLink to="/cart" style={{ textDecoration: "none" }}>
					<CartWidget />
				</NavLink>
			</nav>
		)
	}
	else {
		return (
			<nav>
				<h3>
					Jose Storani
				</h3>
				<ul>
					<li>
						<a href="https://www.facebook.com/">Facebook</a>
					</li>

					<li>
						<a href="https://www.instagram.com/">Instagram</a>
					</li>

					<li>
						<a href="https://twitter.com/">Twitter</a>
					</li>

				</ul>
			</nav>
		)
	}
}


export default Navbar