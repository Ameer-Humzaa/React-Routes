import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Landing from './Pages/Landing'
import Product from './Pages/Product'
import Team from './Pages/Team'
import About from './Pages/About'
import Error from './Pages/Error'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Navbar from './Components/Navbar'
import Fetch from './Pages/Fetch'
import ProRouting from './Pages/ProRouting'
import Producthead from './Pages/Producthead'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/'element={<><Navbar/>,<Landing/></>}/>

        <Route path='Product' element={<><Navbar/>,<Product/></>}>
        <Route index element={<Producthead/>}/>
        <Route path='ProRouting' element={<ProRouting/>}/>
        </Route>
        
        
        <Route path='/Fetch' element={<><Navbar/>,<Fetch/></>}/>
        <Route path='/About' element={<><Navbar/>,<About/></>} />
        <Route path='/Team' element={<><Navbar/><Team/></>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </div>
  )
}

export default App
