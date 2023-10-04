import { useState } from 'react'

//Componentes
import Navbar from './Components/Navbar'
import ItemList from './Components/ItemList'
import Shoppingcart from './Components/Shoppingcart'
import { ShoppingCartProvider } from './context/contex'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ShoppingCartProvider>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element = {<ItemList></ItemList>}></Route>
          <Route path='cart' element= {<Shoppingcart></Shoppingcart>}></Route>
        </Routes>
        
      </Router>
    </ShoppingCartProvider>
  )
}

export default App
