import React from 'react'
import Navbar from '../components/Navbar'
import CatagoryList from '../components/CatagoryList'
import FoodList from '../components/FoodList'
import Cart from '../components/Cart'

const Home = () => {
  return (
   <>
   <Navbar/>
   <CatagoryList/>
   <FoodList/>
   <Cart/>
   </>
  )
}

export default Home