import React from 'react'

const FoodCard = () => {
  return (
    <div className='w-[250px] px-3 shadow-xl rounded-md p-5'>
        <img className='hover:scale-105 transition-all duration-300' src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"/>
        <div className='flex flex-col gap-3'>
            <div className='flex justify-between'>
                <h3 className='font-bold'>Onion Pizza</h3>
                <h3>$ 150</h3>
            </div>
            <p className='text-sm font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <div className='flex justify-between'>
                <h3 className='flex items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path color='orange' fill='yellow' strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg> 4.5
</h3>
                <button className='bg-green-400 hover:bg-orange-400 text-white font-bold rounded-md px-2 py-2'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default FoodCard