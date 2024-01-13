import React from 'react'

//for calling the reducer we need useDispatch
import { useDispatch } from 'react-redux'
// bringing the reducer itself
import { addToCart } from '../redux/slices/CartSlice'

//for toast showing
import toast , {Toaster} from 'react-hot-toast'

//Actual Code

const FoodCard = ({id, name, price, desc, img, rating}) => {

const dispatch=useDispatch();

const handleToast=(name)=>toast.success(`${name} added to Cart`);

  return (

    

    <div className='w-[250px] px-3 shadow-xl rounded-md p-5'>
        <img className='hover:scale-105 transition-all duration-300' src={img}/>
        <div className='flex flex-col gap-3'>
            <div className='flex justify-between'>
                <h3 className='font-bold'>{name}</h3>
                <h3>${price}</h3>
            </div>
            <p className='text-sm font-normal'>{desc.slice(0,80)} </p>
            <div className='flex justify-between'>
                <h3 className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path color='orange' fill='yellow' strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg> {rating}
</h3>
                <button onClick={()=>{ dispatch(addToCart({id, name,  rating, price, img, qty: 1} )) ; handleToast(name) }  } className='bg-green-400 hover:bg-orange-400 text-white font-bold rounded-md px-2 py-2'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default FoodCard