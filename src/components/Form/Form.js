
import { addDoc, collection, serverTimestamp, /* doc, updateDoc */ } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { dataBase } from "../../firebaseconfig"



const Form = ({total, handleId}) => {  
    const {cart, clearCart} = useContext(CartContext); //traigo la informacion que necesito, para practicar, use las dos formas, por props y por context
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");
    // const [color,setColor] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nombre, apellido, email, direccion, telefono)
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
        }

        const orderCollection = collection(dataBase, "orders");

        addDoc(orderCollection, order).then((res) => {
            handleId(res.id);
            clearCart();
            // updateProd();
            
            
        })

        // const updateProd = () => {
        //     const orderDoc = doc(dataBase, "orders", "6dAPykHoIeNuey4eI2qR");
        //     updateDoc(orderDoc, {total: 120})
        // }
    }

    const handleChangeNombre = (e) => {
        setNombre(e.target.value)

    };

    const handleChangeApellido = (e) => {
        setApellido(e.target.value)

    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangeDireccion = (e) => {
        setDireccion(e.target.value)
    }

    const handleChangeTelefono = (e) => {
        setTelefono(e.target.value)
    }
    // const handleChangeColor = (e) => {
    //     setColor(e.target.value)


    // }

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
                {/* <select value={color} onChange={handleChangeColor} name="colorCelular">
                    <option value="Negro">Negro</option>
                    <option value="Gris">Gris</option>
                    <option value="Azul">Azul</option>
                </select> */}
            </form>

        </div>
    )


}

export default Form