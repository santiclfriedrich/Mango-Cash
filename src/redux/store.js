import { configureStore } from "@reduxjs/toolkit";
import registroReducer from './registroSlice'
import loginReducer from './loginSlice'
import transaccionesReducer from './transaccionesSlice'

export const store = configureStore({
    reducer: {
        registro: registroReducer,
        auth: loginReducer,
        transacciones: transaccionesReducer,
    },
})