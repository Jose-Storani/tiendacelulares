import React, { useState } from 'react'

const Form = () =>{
    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [color,setColor] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();     
        console.log(nombre,apellido,color)
    }

    const handleChangeNombre = (e) =>{
        setNombre(e.target.value)

    };

    const handleChangeApellido = (e) =>{
        setApellido(e.target.value)

    };

    const handleChangeColor = (e) => {
        setColor(e.target.value)
    

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Nombre...' name='nombre' value={nombre}  onChange={handleChangeNombre} >
                </input>
                <input type="text" placeholder='Apellid' name='apellido' value={apellido} onChange={handleChangeApellido} ></input>
                <button  >Enviar</button>
                <select value={color} onChange={handleChangeColor} name="colorCelular">
                    <option value="Negro">Negro</option>
                    <option value="Gris">Gris</option>
                    <option value="Azul">Azul</option>
                </select>
            </form>

        </div>
    )


}

export default Form