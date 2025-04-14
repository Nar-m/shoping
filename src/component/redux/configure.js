import { configureStore } from "@reduxjs/toolkit";
import categoryreducer from "./categorys/categoryreducer";
import restoranreducer from './restoran/Filterrestorans'
import Cartreducer from "./cart/Cartreducer";
import wishlistreducer from "./wishlist/wishlistreducer";
import Loginreducer from "./login/Loginreducer";

export const store = configureStore({
    reducer: {
        category: categoryreducer,
        restoran: restoranreducer,
        cart: Cartreducer,
        wishlist: wishlistreducer,
        login: Loginreducer
    }
})