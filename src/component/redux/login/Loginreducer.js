import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
    name: 'login',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')) || {
            email: "",
            password: "",
            autuser: false
        },
        result: {
            erroremail: "",
            errorpassword: "",
        }
    },
    reducers: {
        Login: (state, action) => {
            const userid = action.payload
            state.user = userid
        },

        Logout: (state) => {
            
        }
    }
})
export const { Login, Logout } = LoginSlice.actions
export default LoginSlice.reducer