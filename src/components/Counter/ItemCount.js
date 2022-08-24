import React, { useState } from "react";

const ItemCount = () =>{
    const [count, setCount] = useState(0);

    let maximo = 10;

    const sumar = () =>{

        count < maximo ? setCount(count + 1): alert ("Maximo Stock");
        
    }

    const restar = () => {
        
        count > 0 ? setCount(count - 1): alert ("El valor no puede ser negativo");
    };

    return(
        <div style={{backgroundColor: "lightgray", display: "flex", justifyContent: "center"}} >
            <button onClick={restar} style={{width:"50px"}}> - </button>
            <p>Count: {count} </p>
            <button onClick={sumar} style={{width:"50px"}}> + </button>

        </div>
    )
}

export default ItemCount