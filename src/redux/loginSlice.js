import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const loginUsuario = createAsyncThunk(
    'auth/loginUsuario',
    async(loginData, {rejectWithValue}) => {

        try {
            const response = await fetch('http://localhost:8080/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),  
            })

            const contentType = response.headers.get('Content-Type');
            let data;

            if(contentType && contentType.includes('application/json')){
                data = await response.json()
            } else {
                data = await response.text()
            }

            if(response.ok){
                toast.success(data.message || 'Inicio de sesión exitoso')
            } else{
                toast.error(data.error || 'No se ha podido iniciar sesión')
                return rejectWithValue(data.error)
            }

            
        } catch (error) {

            toast.error('Error en el inicio de sesión');
            return rejectWithValue(error.message);
            
        }

    }
);

const loginSlice = createSlice({
    name: 'auth',
    initialState: {
        loginData: {
            email: '',
            passsword: '',
    },
    status: 'idle',
    isAuthenticated: false,
    user: null,
    error: null,
    },

    reducers: {
        actualizarLoginFormulario: (state, action) => {
            const {name, value} = action.payload;
            state.loginData[name] =  value
        },
        logoutUsuario: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            toast.info("Has cerrado sesión")
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(loginUsuario.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginUsuario.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.isAuthenticated = true;
                state.user = action.payload;
                state.loginData = {};
            })
            .addCase(loginUsuario.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
})

export const { actualizarLoginFormulario, logoutUsuario } = loginSlice.actions

export default loginSlice.reducer