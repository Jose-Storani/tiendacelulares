import React, { useState } from "react";

const Counter = () =>{
    const [count, setCount] = useState(0);

    const sumar = () =>{

     setCount(count + 1);
    };

    const restar = () => {
        setCount (count - 1);
    };

    return(
        <div style={{backgroundColor: "lightgray", display: "flex", justifyContent: "center"}} >
            <button onClick={restar} style={{width:"50px"}}> - </button>
            <p>Count: {count} </p>
            <button onClick={sumar} style={{width:"50px"}}> + </button>

        </div>
    )
}

export default Counter