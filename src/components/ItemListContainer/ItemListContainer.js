import React, { useEffect, useState } from 'react'
import { products } from '../../mocks/products';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {collection, getDocs,query,where} from "firebase/firestore";
import {dataBase} from "../../firebaseconfig.js"
const ItemListContainer = (props) => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(Boolean);

	const { id } = useParams();
	


	useEffect(() => {
		setIsLoading(true)
		const itemCollection = collection(dataBase,"productos");	
		
		if (id !== undefined) {
			const filtrado = query(itemCollection, where("category", "==", id))
			getDocs(filtrado)
			.then((respuesta) =>{
				const productosFiltrados = respuesta.docs.map ((prod) => {
					return {
						id: prod.id,
					...prod.data()
					}
				});
				setItems(productosFiltrados);
			})
			.catch((error) =>{
				console.log(error)
			})
			.finally(() => {
				setIsLoading(false)
			})								
		}
		
		else {
			getDocs(itemCollection)
		.then((respuesta) => {
			const productos = respuesta.docs.map((prod) => {
				return{
					id: prod.id,
					...prod.data()
				}
			});
			setItems(productos);
			
		})
		.catch((error) => {
			console.log(error)
		})
		.finally(() => {
			setIsLoading(false)
		})	
			
		}					
				
		}									
	,[id])

	
		


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

// const getProducts =
// 			new Promise((res, rej) => {
// 				const filtrados = products.filter((prod) =>
// 					prod.category === id
// 				);

// 				setTimeout(() => {
// 					res(id ? filtrados : products);
// 				}, 1000
// 				)
// 			}
// 			);
// 		getProducts.then((data) => {
// 			setItems(data);
// 		})
// 			.catch((error) => {
// 				console.log(error);
// 			}).finally(() => {
// 				setIsLoading(false)
				
// 			});
		
// 	},
// 		[id])