import React, {  useState } from "react";

const ItemCount = ({stock, inicial, onAdd}) =>{
    const [count, setCount] = useState(inicial);

    // useEffect(() => {
    //     console.log("Cambio el estado")
    // }, [count])

    const sumar = () =>{

        count <stock ? setCount(count + 1): alert ("Maximo Stock");
        
    }

    const restar = () => {
        
        count > inicial && setCount(count - 1)
    };

    return(
        <div style={{backgroundColor: "lightgray", display: "flex", justifyContent: "center"}} >
            <button onClick={restar} disabled={count === inicial} style={{width:"50px"}}> - </button>
            <p>Count: {count} </p>
            <button onClick={sumar} style={{width:"50px"}}> + </button>
            <button  onClick={onAdd} >Agregar al carrito</button>

        </div>
    )
}

export default ItemCount