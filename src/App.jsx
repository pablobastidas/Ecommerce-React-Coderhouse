import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './componentes/navbar/navbar'
import ItemListContainer from './componentes/itemlistcontainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <br/>
      <ItemListContainer titulo = 'Bienvenido a la tienda con productos de F1' />
    </>
  )
}

export default App
