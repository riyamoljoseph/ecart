import { configureStore } from "@reduxjs/toolkit";
import wishlistslice from "./slice/wishlistslice";
import cartSlice from "./slice/cartSlice";




const store= configureStore({
    reducer :{
        wishlistReducer:wishlistslice,
        cartReducer:cartSlice
    }
})
export default store