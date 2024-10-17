import { configureStore } from "@reduxjs/toolkit";
import registroReducer from './registroSlice'

export const store = configureStore({
    reducer: {
        registro: registroReducer,
    },
})