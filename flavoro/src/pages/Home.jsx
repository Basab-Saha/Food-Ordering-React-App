import React from 'react'
import Navbar from '../components/Navbar'
import CatagoryList from '../components/CatagoryList'
import FoodList from '../components/FoodList'

const Home = () => {
  return (
   <>
   <Navbar/>
   <CatagoryList/>
   <FoodList/>
   </>
  )
}

export default Home