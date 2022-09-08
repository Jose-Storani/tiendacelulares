import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Cart/Cart'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
// import Boton from '../Boton/Boton'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const Main = () => {
  return (
    <main  >
      <section >
        <h2 >Bienvenidos</h2>
      </section>
      <Routes>
        <Route
          path='/'
          element={<ItemListContainer saludo="este es nuestro catalogo" />}
        />
        <Route
          path='/detail'
          element={<ItemDetailContainer />}
        />
        <Route
          path='/cart'
          element={<Cart />}
        />
      </Routes>

    </main>
  )
}

export default Main