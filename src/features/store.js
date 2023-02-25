import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiStore } from "./api";

export const store = configureStore({
                reducer:{
                 [apiStore.reducerPath]:apiStore.reducer
                },
                middleware:(getDefaultMiddleware)=>
                getDefaultMiddleware().concat(apiStore.middleware)
})