import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refresh, register } from "./operations";

const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isAuthLoading: true,
};

const handlePending = (state) => {
    state.isAuthLoading = false;
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [register.pending]: handlePending,
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isAuthLoading = true;
        },
        [login.pending]: handlePending,
        [login.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isAuthLoading = true;
        },
        [logout.pending]: handlePending,
        [logout.fulfilled](state) {
            state.user = {
                name: null,
                email: null,
            };
            state.token = null;
            state.isLoggedIn = false;
            state.isAuthLoading = true;
        },
        [refresh.pending](state) {
            state.isRefreshing = true;
            state.isAuthLoading = true;
        },
        [refresh.fulfilled](state, action) {
            state.user = action.payload;            
            state.isLoggedIn = true;
            state.isRefreshing = false;
            state.isAuthLoading = true;
        },
        [refresh.rejected](state) {
            state.isRefreshing = false;
        }
    }
});


export const authReducer = authSlice.reducer;