import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'

//for filtering category
import {useSelector, useDispatch} from 'react-redux'
import { setCategory } from '../redux/slices/CategorySlice'


const FoodList = () => {

  const selectedCategory=useSelector((state)=>state.category.category);
  
  const search=useSelector((state)=>state.search.search); 


  return (
    <div className='flex flex-wrap gap-10 justify-center '>
        {
          FoodData.filter((food)=>{
            if(selectedCategory=="All"){
              return food.name.toLowerCase().includes(search.toLowerCase());
            }
            return (
              food.category===selectedCategory && food.name.toLowerCase().includes(search.toLowerCase())
            )
          }).map((food)=>{
            return(
              <FoodCard key={food.id} id={food.id} img={food.img} price={food.price}  name={food.name} desc={food.desc} rating={food.rating} />
            )
          })
        }
    </div>
  
  )
}

export default FoodList

//<FoodCard key={food.id} id={food.id} img={food.img} price={food.price}  name={food.name} desc={food.desc} rating={food.rating} />