import React from 'react'
import { Link , Outlet } from 'react-router-dom'
import ProRouting from './ProRouting'
import Producthead from './Producthead'

const Product = () => {
  return (
    <div>
      
   
  
  

   <Outlet/>
   <button className="w-full py-3 mt-4 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition duration-300"><Link to={'/Product/ProRouting'}>Pro-Page2</Link></button>
  </div>
  )
}

export default Product
