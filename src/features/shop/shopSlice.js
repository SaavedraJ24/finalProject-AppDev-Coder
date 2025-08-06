import { createSlice, current } from "@reduxjs/toolkit";
import categories from '../../data/categories.json';
import products from '../../data/products.json';

const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        categories,
        products,
        categorySelected: undefined,
        productsFilteredByCategory: [],
        productSelected: {},
    },
    reducers: {
        setCategorySelected: (state, action) => {
            state.categorySelected = action.payload,
            console.log(current(state).categorySelected)
        },
        filterProducts: (state) => {
            if (state.categorySelected !== undefined) {
                state.productsFilteredByCategory = products.filter(
                    product => product.categoryId === state.categorySelected
                );
            }
        },
        setProductSelected: (state, action) => {
            state.productSelected = action.payload
            console.log(current(state).productSelected)
        }
    }
})

export const { setCategorySelected, filterProducts, setProductSelect } = shopSlice.actions;

export default shopSlice.reducer;