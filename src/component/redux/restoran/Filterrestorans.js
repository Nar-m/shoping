import { createSlice } from "@reduxjs/toolkit";
import { restorans } from "../../restorans";

export const RestoransSlice = createSlice({
    name: 'restoran',
    initialState: {
        search: [],
        poisk: false,
        names: JSON.parse(localStorage.getItem('names')) || [],
        multy: [],
        checkitem: [],
        findname: false,
        checkname: false
    },
    reducers: {
        Filtersname: (state, action) => {
            state.findname = true
            state.search = false;
            state.checkname = false
            let filtersname = restorans.filter(item => item.kingnof === action.payload || item.name === action.payload)
            state.names = filtersname
            localStorage.setItem('names', JSON.stringify(state.names))
        },
        Filtercheck: (state, action) => {
            state.findname = false
            state.search = false
            state.checkname = true
            if (state.multy.includes(action.payload)) {
                state.multy = state.multy.filter(item => item !== action.payload)
                state.checkitem = state.checkitem.filter(item => item.category !== action.payload)
            }
            else {
                let filtercheck = restorans.filter(item => item.category === action.payload)
                state.checkitem = [...filtercheck, ...state.checkitem]
                state.multy = [...state.multy, action.payload]
            }
            if (state.checkitem.length === 0) {
                state.checkname = false
            }
        },

        Searchproduct: (state, action) => {
            state.poisk = true
            state.checkname = false
            state.findname = false
            let filter = restorans.filter(item => item.name.toLocaleLowerCase().includes(action.payload)
                || item.kingnof.toLocaleLowerCase().includes(action.payload)
                || item.category.toLocaleLowerCase().includes(action.payload))
            state.search = filter
        }
    }
})

export const { Filtersname, Filtercheck, Searchproduct } = RestoransSlice.actions
export default RestoransSlice.reducer