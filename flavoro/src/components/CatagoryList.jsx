import React, { useEffect , useState } from 'react'
import FoodData from '../data/FoodData'

//for filtering category
import {useSelector, useDispatch} from 'react-redux'
import { setCategory } from '../redux/slices/CategorySlice'

const CatagoryList = () => {

const[catagories,setCatagories]=useState([]);

const listUniqueCatagories = ()=>{
  const uniqueCatagories=[...new Set(FoodData.map((food)=>food.category))];

  setCatagories(uniqueCatagories);
  console.log(uniqueCatagories);
}

useEffect(()=>{
  listUniqueCatagories();

},[])

const dispatch=useDispatch();
const selectedCategory=useSelector((state)=>state.category.category);

  return (
    <div className='mx-10 flex flex-col gap-4'>
        <div>
            <h2 className='text-xl font-bold'>Find the best food</h2>
        </div>
        <div className='flex flex-row gap-3 overflow-x-scroll lg:overflow-x-hidden'>
        <button onClick={()=>dispatch(setCategory("All") )}  className={`bg-gray-300 px-3 py-2 transition-colors duration-300 rounded-md hover:bg-green-400 hover:text-white ${selectedCategory==="All"?"bg-green-400":"bg-gray-300"} `}>All</button>
          {
            catagories.map((category,index)=>{
              return(
                <button onClick={()=>dispatch(setCategory(category) )} key={index} className={`bg-gray-300 px-3 py-2 transition-colors duration-300 rounded-md hover:bg-green-400 hover:text-white ${selectedCategory===category?"bg-green-400":"bg-gray-300"} `}>{category}</button>
              )
            })
          }
        </div>
    </div>
  )
}

export default CatagoryList

