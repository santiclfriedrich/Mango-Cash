import { configureStore } from "@reduxjs/toolkit";
import registroReducer from './registroSlice'
import loginReducer from './loginSlice'

export const store = configureStore({
    reducer: {
        registro: registroReducer,
        auth: loginReducer,
    },
})