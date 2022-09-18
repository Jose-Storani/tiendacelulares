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
        count > inicial && setCount(count - 1)
    };
    return(
        <div style={{border:"solid blue 2px"}} >
            <button onClick={restar} disabled={count === inicial} style={{width:"50px"}}> - </button>
            <p>Count: {count} </p>
            <button onClick={sumar} style={{width:"50px"}}> + </button>
            <button  onClick={()=>onAdd(count)} >Agregar al carrito</button>

        </div>
    )
}

export default ItemCount