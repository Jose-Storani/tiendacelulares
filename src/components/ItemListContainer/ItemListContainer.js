import React, { useEffect, useState } from 'react'
import { products } from '../../mocks/products';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
	const [items, setItems] = useState([]);

	const { categoryName } = useParams();


	useEffect(() => {
		const getProducts =
			new Promise((res, rej) => {
				const filtrados = products.filter((prod) =>
					prod.category === categoryName
				);

				setTimeout(() => {
					res(categoryName ? filtrados : products);
				}, 1000
				)
			}
			);
		getProducts.then((data) => {
			setItems(data)
		});
	},
		[categoryName])




	return (
		<div>
			
			<h2>{props.saludo}</h2>
			<ItemList listado={items} />
		</div>

	)
		;
}

export default ItemListContainer