import React, {  useEffect, useState } from "react";

const ItemCount = ({stock, inicial = 1, onAdd}) =>{
    const [count, setCount] = useState(inicial);

    useEffect(()=>{
        setCount(inicial);

    },[inicial])
    const sumar = () =>{

        count <stock ? setCount(count + 1): alert ("Maximo Stock");
        
    }
    const restar = () => {       
        count > 0 && setCount(count - 1)
    };
    return(
        <div style={{display:"flex", justifyContent:"center"}} >
            <button onClick={restar} disabled={count === 1} style={{width:"50px"}}> - </button>
            <p>Cantidad: {count} </p>
            <button onClick={sumar} style={{width:"50px"}}> + </button>
            <button  onClick={()=>onAdd(count)} >Agregar al carrito</button>

        </div>
    )
}

export default ItemCount