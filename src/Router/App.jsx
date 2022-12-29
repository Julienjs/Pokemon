import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error from '../Pages/Error'
import Home from '../Pages/Home'
import Pokemon from '../Pages/Pokemon'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/detail/:id" element={<Pokemon />}></Route>
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
