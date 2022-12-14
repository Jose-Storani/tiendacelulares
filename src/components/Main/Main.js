import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Cart/Cart'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const Main = () => {
  return (
    <main>           
      <Routes>     
        <Route
          path='/tiendacelulares'
          element={<ItemListContainer/>}
        />
        <Route
          path='/category/:id'
          element={<ItemListContainer/>}
        />
        <Route
          path='/detail/:id'
          element={<ItemDetailContainer/>}
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