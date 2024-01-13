import React, { useState } from 'react'
import ItemCart from './ItemCart'
import { ImCancelCircle  } from "react-icons/im";
import {FaShoppingCart} from "react-icons/fa"

//for redux
import { useSelector } from 'react-redux';

//for routing to success page
import {useNavigate} from 'react-router-dom'

const Cart = () => {

  const cartItems = useSelector((state) => state.cart.cart);
  //console.log(cartItems)

  const[activeCart,setActiveCart]=useState(false);

  const totalItems=cartItems.reduce((sum,item)=>sum+item.qty , 0); 
  const totalPrice=cartItems.reduce((sumPrice,item)=>sumPrice+(item.qty*item.price), 0);

  const navigate=useNavigate();

  return (
    <>
    <div className={`fixed right-0 top-0  h-full w-full lg:w-[20vw] p-5 bg-gray-100 ${activeCart ? 'translate-x-0' : 'translate-x-full'} transition-all duration-300 z-50`}>


        {/*div containing My Orders and  cross button (from shutting down this comp*/ }
        <div className='flex justify-between my-3'>
            <span className='text-xl font-bold'>My Orders</span>

            <ImCancelCircle onClick={()=>setActiveCart(!activeCart)} className='transition-all duration-200 rounded-md hover:scale-150'/>

        </div>

        {/*All Items in cart */}
        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCart
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-800">
            Your cart is empty
          </h2>
        )}
        

        {/*Total amount & checkout btn will be shown in this div */}
        <div className='  flex flex-col gap-2 absolute bottom-0'>
            <h1 className='font-bold'>Items:{totalItems}</h1>
            <h1 className='font-bold'>Amount:{totalPrice}</h1>
            <hr></hr>
            <button onClick={()=>navigate('/success')} className='font-bold bg-green-800 px-3 py-2 rounded-md w-[90vw] lg:w-[18vw] mb-4 text-white'>Check out</button>
        </div>

    </div>

    <FaShoppingCart onClick={()=>setActiveCart(!activeCart)} className={`fixed right-10 bottom-10 rounded-lg hover:scale-150 transition-transform duration-200 text-3xl  bg-white ${totalPrice>0 ? "animate-bounce":"visible"} `}/>
    </>
  )
}

export default Cart
