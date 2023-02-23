import { createSlice } from "@reduxjs/toolkit";
import { getUserThunk, loginThunk, logOutThunk, signUpThunk } from "./authOperations";

const initialState = {
    isLoading: false,
    error: null,
    user: null,
    token: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(signUpThunk.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(signUpThunk.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.error = null;
            state.user = payload.user;
            state.token = payload.token;
        })
        .addCase(signUpThunk.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })
        
        .addCase(loginThunk.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(loginThunk.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.error = null;
            state.user = payload.user;
            state.token = payload.token;
        })
        .addCase(loginThunk.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload
        })
        .addCase(getUserThunk.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getUserThunk.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.error = null;
            state.user = payload;
        })
        .addCase(getUserThunk.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })
        .addCase(logOutThunk.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(logOutThunk.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
            state.token = null;
            state.user = null;
        })
        .addCase(logOutThunk.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload
        })
    }
})

export const authReducer = authSlice.reducer;