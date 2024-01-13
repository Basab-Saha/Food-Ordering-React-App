import React from 'react'
import {AiOutlinePlus,AiOutlineMinus   } from "react-icons/ai"
import {MdDelete} from "react-icons/md"

//for redux
import { useDispatch } from 'react-redux'
import { removeFromCart , incrementQty , decrementQty } from '../redux/slices/CartSlice'

//for toast
import toast , {Toaster} from 'react-hot-toast'

const ItemCart = ({id,img,name,price,qty}) => {
  const dispatch=useDispatch();

  const handleToast=(name)=>toast.success(`${name} removed from Cart`);

  return (
    <div  className='flex gap-2 shadow-xl p-2 mb-5  rounded-lg'>
      <MdDelete  onClick={()=>{dispatch(removeFromCart({id,name})); handleToast(name)  }  }  className='absolute right-7 cursor-pointer hover:scale-150'/>
        <img  src={img} className='w-[50px] h-[50px]'/>
        <div>
            <h1 className='font-bold text-gray-800'>{name}</h1>
            <div className='flex justify-between '>

              <span className='text-green-500 font-bold'>₹{price}</span>
             

              <div className='flex gap-2 justify-center items-center absolute right-7'>
                  <AiOutlinePlus onClick={()=>   dispatch(incrementQty({id,name,price}))} className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl cursor-pointer'/>
                  <span>{qty}</span>
                  <AiOutlineMinus onClick={()=> qty>1 ? dispatch(decrementQty({id,name,price})) : dispatch(removeFromCart({id,name}))} className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl cursor-pointer'/>
              </div>
            
            </div>
        </div>
    </div>
  )
}

export default ItemCart