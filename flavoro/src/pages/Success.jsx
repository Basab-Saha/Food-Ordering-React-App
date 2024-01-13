import React, { useEffect, useState } from 'react'

//for spinner
import {PropagateLoader} from 'react-spinners'

const Success = () => {

  //useState for loading state 
  const[loading , setLoading]=useState(true);

  useEffect(()=>{

    setTimeout(()=>{
      setLoading(false)
    
    },3000);

  },[])

  return (
    <div className='flex flex-col items-center justify-center h-screen'>

     {
      loading ? <PropagateLoader color='#36d7b7' /> :
      <div> 
      <h2 className='text-5xl text-center font-semibold mb-4'>Order Sucessful! 🎉</h2>

      <p className='text-center'>Your order has been succesfully placed</p>
      </div>
     }
      
    </div>
  )
}

export default Success