import { createSlice } from "@reduxjs/toolkit";
import { product } from "../../product";

export const CategorySlice = createSlice({
    name: 'category',
    initialState: {
        search: [],
        result: "",
        searchfilter: false,
        filter: JSON.parse(localStorage.getItem('filters')) || [],
        filterarr: false,
        category: JSON.parse(localStorage.getItem('category')) || []
    },
    reducers: {
        Filtercategory: (state, action) => {
            let filtercategory = product.filter(item => (action.payload === 'View all' ? state.category.concat(product) : item.category === action.payload))
            state.category = filtercategory
            localStorage.setItem('category', JSON.stringify(state.category))
        },
        Searchproduct: (state, action) => {
            state.searchfilter = true
            const searchfilter = product.filter(item => item.name.replace(/\s/g, '').toLocaleLowerCase().includes(action.payload)
                || item.text.replace(/\s/g, '').toLocaleLowerCase().includes(action.payload) || item.category.replace(/\s/g, '').toLocaleLowerCase().includes(action.payload))
            state.search = searchfilter
            if (action.payload === '') {
                state.searchfilter = false
            }
            if (state.search.length === '') {
                state.result = `Not Result ${action.payload}`
            }
            else {
                state.result = `${state.search.length} Result ${action.payload}`
            }
        },
        CloseSearch: (state) => {
            state.searchfilter = false
        },
        Filterproduct: (state, action) => {
            state.filterarr = true
            let newfilter = product.filter(item => item.acess === action.payload || item.tv === action.payload ||
                item.luxury === action.payload || item.sport === action.payload || item.color === action.payload
                || item.size === action.payload)
            state.filter = newfilter
            localStorage.setItem('filters', JSON.stringify(state.filter))
        }
    }
})

export const { Filtercategory, Filteritems, Searchproduct, CloseSearch, Filterproduct } = CategorySlice.actions
export default CategorySlice.reducer