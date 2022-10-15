import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name: "filter",

    initialState: "",

    reducers: {
        filterSet(state, action) {
            return state = action.payload;
        }
    }
});

export const { filterSet } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;