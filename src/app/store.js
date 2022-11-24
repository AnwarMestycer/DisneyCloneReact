import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useReducer } from 'react'
export default configureStore({
    reducer: {
        user: useReducer,
        
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
})