import { createSlice } from "@reduxjs/toolkit";

export const WishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        wishlist: JSON.parse(localStorage.getItem('wishlist')) || []
    },
    reducers: {
        addtoWishlst: (state, action) => {
            let likes = state.wishlist.findIndex(item => item.id === action.payload.id)
            if (likes !== -1) {
                state.wishlist.splice(likes, 1)
                localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
            }
            else {
                let newitem = { ...action.payload }
                state.wishlist.push(newitem)
                localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
            }
        }
    }
})
export const { addtoWishlst } = WishlistSlice.actions
export default WishlistSlice.reducer