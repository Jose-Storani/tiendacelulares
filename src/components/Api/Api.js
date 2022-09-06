import React, { useEffect, useState } from 'react'

const Api = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://digimon-api.vercel.app/api/digimon")
            .then((respuesta) => respuesta.json())
            .then((listado) => setItems(listado))
            .catch((error) => {
                console.log(error);
            }).finally(() =>{
                setIsLoading(false)
            })
            
    }, []);



    return (


        <div>
            {
                isLoading ?
                    (<h1>cargando </h1>) : (

                        <>

                            {items.map((item) => {
                                return (
                                    <div className='itemsApi'>
                                        <img src={item.img} alt="imagenDigimon" />
                                        <h4>{item.name}</h4>
                                    </div>
                                );
                            })
                            };
                        </>
                    )}
        </div>
    )
}

export default Api