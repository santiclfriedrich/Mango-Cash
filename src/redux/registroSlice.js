import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const registrarUsuario = createAsyncThunk(
    'registro/registrarUsuario',
    async (formData, { rejectWithValue }) => {

        try {

            const response = await fetch('http://localhost:8080/api/v1/usuarios',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            
            // Verifica si el servidor responde con un tipo de contenido JSON
            const contentType = response.headers.get('Content-Type');
            let data;

            if (contentType && contentType.includes('application/json')) {
                data = await response.json(); // Parseamos solo si es JSON
            } else {
                data = await response.text(); // Sino, tomamos el texto
            }

            console.log(data); // Log para ver la respuesta


            if(response.ok){
                toast.success(data.message || 'Usuario registrado con éxito')
                return data
            } else {
                toast.error(data.error || 'No se ha podido registrar el usuario')
                return rejectWithValue(data.error)
            }
            
        } catch (error) {
            toast.error('Error al enviar el formulario')
            return rejectWithValue(error.message)
        }
    }
);

const registroSlice = createSlice({
    name: 'registro',
    initialState: {
        formData: {
            nombre: '',
            apellido: '',
            email: '',
            password: '',
            fechaNacimiento: '',
            genero: '',
        },
        status: 'idle',
        error: null,
        isRegistered: false,
    },

    reducers: {
        actualizarFormulario: (state, action) => {
            const {name, value} = action.payload;
            state.formData[name] = value;
        },
        resetRegistroState: (state) => {
            state.status = 'idle'
            state.isRegistered = false
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(registrarUsuario.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(registrarUsuario.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.isRegistered = true
            console.log('Usuario registrado:', action.payload);
            state.formData = {
                nombre: '',
                apellido: '',
                email: '',
                password: '',
                fechaNacimiento: '',
                genero: '',
            };
        })
        .addCase(registrarUsuario.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload
            state.isRegistered = false
        })
    }
})

export const { actualizarFormulario, resetRegistroState } = registroSlice.actions;

export default registroSlice.reducer