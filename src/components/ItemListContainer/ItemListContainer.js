import React, { useEffect, useState } from 'react'
import { products } from '../../mocks/products';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(Boolean);

	const { id } = useParams();
	// console.log(isLoading)
	


	useEffect(() => {
		setIsLoading(true)
		const getProducts =
			new Promise((res, rej) => {
				const filtrados = products.filter((prod) =>
					prod.category === id
				);

				setTimeout(() => {
					res(id ? filtrados : products);
				}, 1000
				)
			}
			);
		getProducts.then((data) => {
			setItems(data);
		})
			.catch((error) => {
				console.log(error);
			}).finally(() => {
				setIsLoading(false)
				
			});
		
	},
		[id])




	return (
		<div>
			{
				isLoading ? (<h3>Cargando productos</h3>) :
					<>
						<h2>{props.saludo}</h2>
						<ItemList listado={items} />
					</>
			}




		</div>


	)
		;
}

export default ItemListContainer