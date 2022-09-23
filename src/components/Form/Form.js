
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { dataBase } from "../../firebaseconfig"



const Form = ({total, handleId, handleOrder}) => {  
    const {cart, clearCart} = useContext(CartContext); 
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        handleOrder();
        const order = {
            buyer: {
                nombre,
                apellido,
                email,
                direccion,
                telefono
            },
            items: cart,
            total: total,
            date: serverTimestamp()
        };

        const orderCollection = collection(dataBase, "orders");

        addDoc(orderCollection, order).then((res) => {
            handleId(res.id);
            clearCart();    
        })
        .catch((error) => {
            console.log(error)
        })
        ;      
    };

    const handleChangeNombre = (e) => {
        setNombre(e.target.value)
    };

    const handleChangeApellido = (e) => {
        setApellido(e.target.value)
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    };

    const handleChangeDireccion = (e) => {
        setDireccion(e.target.value)
    };

    const handleChangeTelefono = (e) => {
        setTelefono(e.target.value)
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Nombre...' name='nombre' value={nombre} onChange={handleChangeNombre} >
                </input>
                <input type="text" placeholder='Apellido...' name='apellido' value={apellido} onChange={handleChangeApellido} ></input>
                <input type="email" placeholder='Email...' name='email' value={email} onChange={handleChangeEmail} ></input>
                <input type="text" placeholder='Direccion...' name='direccion' value={direccion} onChange={handleChangeDireccion} ></input>
                <input type="tel" placeholder='Telefono...' name='telefono' value={telefono} onChange={handleChangeTelefono} ></input>
                <button  >Enviar</button>              
            </form>
        </div>
    );
};

export default Form