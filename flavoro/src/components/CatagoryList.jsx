import React from 'react'

const CatagoryList = () => {
  return (
    <div className='mx-10 flex flex-col gap-4'>
        <div>
            <h2 className='text-xl font-bold'>Find the best food</h2>
        </div>
        <div className='flex flex-row gap-3 overflow-x-scroll lg:overflow-x-hidden'>
            <button className='bg-gray-300 px-3 py-2 transition-colors duration-300 rounded-md hover:bg-green-400 hover:text-white '>All</button>
            <button className='bg-gray-300 px-3 py-2 transition-colors duration-300 rounded-md  hover:bg-green-400 hover:text-white'>Lunch</button>
            <button className='bg-gray-300 px-3 py-2 transition-colors duration-300 rounded-md  hover:bg-green-400 hover:text-white'>Breakfast</button>
            <button className='bg-gray-300 px-3 py-2 transition-colors duration-300  rounded-md  hover:bg-green-400 hover:text-white'>Dinner</button>
            <button className='bg-gray-300 px-3 py-2 transition-colors duration-300  rounded-md  hover:bg-green-400 hover:text-white'>Snacks</button>
            
        </div>
    </div>
  )
}

export default CatagoryList