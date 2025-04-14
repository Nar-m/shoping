
import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        isopen: false,
        cartitem: JSON.parse(localStorage.getItem('cart')) || [],
        carttotal: JSON.parse(localStorage.getItem('total')) || 0.00,
    },
    reducers: {
        Opencart: (state, action) => {
            state.isopen = true
        },
        Closecart: (state, action) => {
            state.isopen = false
        },
        addtoCart: (state, action) => {
            const { item, quantity } = action.payload
            let newcart = state.cartitem.find(el => el.id === item.id)
            const newQuantity = isNaN(quantity) ? 1 : quantity;
            if (newcart) {
                state.cartitem?.map(el => {
                    return el.id === action.payload.id ? { ...el.quantity, ...newQuantity + 1 } : el
                })
            }
            else {
                let newitems = { ...item, quantity: newQuantity }
                state.cartitem.push(newitems)
                localStorage.setItem('cart', JSON.stringify(state.cartitem))
            }
            state.carttotal = state.cartitem.reduce((calc, el) => calc + parseInt(el.price) * el.quantity, 0)
            localStorage.setItem('total', JSON.stringify(state.carttotal))
        },
        Removecartitem: (state, action) => {
            let removecartitem = state.cartitem.filter(item => item.id !== action.payload.id)
            state.cartitem = removecartitem
            localStorage.setItem('cart', JSON.stringify(state.cartitem))
            state.carttotal = state.cartitem.reduce((calc, el) => calc + parseInt(el.price) * el.quantity, 0)
            localStorage.setItem('total', JSON.stringify(state.carttotal))
        },
        Incrementquantity: (state, action) => {
            let increment = state.cartitem.find(item => item.id === action.payload.id)
            if (increment) {
                increment.quantity++
            }
            localStorage.setItem('cart', JSON.stringify(state.cartitem))
            state.carttotal = state.cartitem.reduce((calc, el) => calc + parseInt(el.price) * el.quantity, 0)
            localStorage.setItem('total', JSON.stringify(state.carttotal))
        },
        Decrementquantity: (state, action) => {
            let decrement = state.cartitem.find(item => item.id === action.payload.id)
            if (decrement) {
                decrement.quantity--
            }
            localStorage.setItem('cart', JSON.stringify(state.cartitem))
            state.carttotal = state.cartitem.reduce((calc, el) => calc + parseInt(el.price) * el.quantity, 0)
            localStorage.setItem('total', JSON.stringify(state.carttotal))
        }
    }
})


export const { Opencart, Closecart, addtoCart, Removecartitem, Incrementquantity, Decrementquantity } = CartSlice.actions
export default CartSlice.reducer
