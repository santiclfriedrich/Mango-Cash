import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { jwtDecode } from 'jwt-decode'

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

                localStorage.setItem('authToken', data.token)

                toast.success(data.message || 'Inicio de sesión exitoso')
                return data

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
            password: '',
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
            localStorage.removeItem('authToken')
            toast.info("Has cerrado sesión")
        },
        verificarSesionUsuario: (state) => {
            const token = localStorage.getItem('authToken');
            if(token){
                try {
                    const decoded = jwtDecode(token)
                    console.log(decoded);
                    state.isAuthenticated = true
                    state.user = decoded
                    
                } catch (error) {
                    console.error('Error decodificando el token', error);
                }
            }
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
                state.user = action.payload.user;
                state.loginData = {};
            })
            .addCase(loginUsuario.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
})

export const { actualizarLoginFormulario, logoutUsuario, verificarSesionUsuario } = loginSlice.actions

export default loginSlice.reducer