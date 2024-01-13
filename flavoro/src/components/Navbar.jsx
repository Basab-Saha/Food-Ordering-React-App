import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/SearchSlice'

const Navbar = () => {
  const dispatch=useDispatch();

  return (
    <nav className='flex flex-col lg:flex-row justify-between mx-10 py-7 mb-4'>
        <div>
            <h1 className='text-2xl font-bold'>{new Date().toUTCString().slice(0,16)}</h1>
            <h3 className='text-3xl font-mono'>Basab's Food Corner </h3>
        </div>

        <div>
            <input onChange={(e)=>dispatch(setSearch(e.target.value))} className='border p-3 border-gray-500 w-full lg:w-[30vw]' type='search' name='search' placeholder='Search here'/>
        </div>
    </nav>
  )
}

export default Navbar