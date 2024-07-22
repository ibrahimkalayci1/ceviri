import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
    isLoading: false,
    error: null,
    answer:"",
}

 const translateSlice = createSlice({
name: "translate",
initialState,
reducers:{},
extraReducers: () => {},
})