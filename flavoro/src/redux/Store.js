import {configureStore} from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CategorySlice from "./slices/CategorySlice";
import SearchSlice from "./slices/SearchSlice";

//Store (class) a alada alada sliece (student) thakbe 
//jader alada alada kaj hobe
const Store=configureStore({

   reducer:{
     //cart nam dhore dakle Slice folder theke CartSlice.jsx asbe
    //this is our first slice
    cart:CartSlice,

    category:CategorySlice,

    search:SearchSlice
   }
})

export default Store;