import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/countSlice'
import todoReducer from "./features/todoSlice";
export const store=configureStore({
    reducer:{
        counter:counterReducer,
        todo:todoReducer
    }
})