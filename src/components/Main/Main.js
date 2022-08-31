import React from 'react'
// import Boton from '../Boton/Boton'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const Main = () => {
  return (
    <main  >
        <section >
            <h2 >Bienvenidos</h2>
          </section>
          <ItemListContainer saludo="este es nuestro catalogo"/>
        
    </main>
  )
}

export default Main