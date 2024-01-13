import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart :(state,action)=>{
            const isPresent=state.cart.find((item)=>item.id===action.payload.id);
            if(isPresent){
                state.cart=state.cart.map((item)=> item.id==action.payload.id ? {...item,qty:item.qty+1}:item);  
            }
            else{
                state.cart.push(action.payload);
            }
         
            
           //jokhon call korbo:-
           //addToCart({id:1, price:20,qty:1})
           // the inner object is payload
        },

        removeFromCart: (state, action) => {
            const isPresent=state.cart.find((item)=>item.name===action.payload.name);
            if(isPresent){
                state.cart=state.cart.filter((item)=>item.name!==action.payload.name);
            }
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
          },
          
          incrementQty:(state,action)=>{
            state.cart=state.cart.map((item)=>item.id==action.payload.id?{...item,qty:item.qty+1}:item)
          },

          decrementQty:(state,action)=>{
            state.cart=state.cart.map((item)=>item.id==action.payload.id?{...item,qty:item.qty-1}:item)
          }
        
    }
})

//actually what are these reducers ?
//these are some actions so CartSlice.action means all the reducers

export const {addToCart,removeFromCart , incrementQty , decrementQty}=CartSlice.actions
export default CartSlice.reducer;