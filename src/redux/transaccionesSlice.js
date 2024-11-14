import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const fetchTransaccionesByUsuario = createAsyncThunk(
    'transacciones/fetchByUsuario',
    async (usuarioId, { rejectWithValue })  => {
        try {
            const response = await fetch(`http://localhost:8080/api/v1/transacciones/usuario/${usuarioId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                },
            });

            const contentType = response.headers.get('Content-Type')
            let data

            if(contentType && contentType.includes('application/json')){
                data = await response.json();
            } else {
                data = await response.text();
            }

            if(response.ok){
                toast.success('Transacciones cargadas exitosamente')
                return data.transacciones
            } else {
                toast.error(data.error || 'No se han podido cargar las transacciones');
                return rejectWithValue(data.error)
            }

        } catch (error){
            toast.error('Error al cargar las transacciones');
            return rejectWithValue(error.message)
        }
    }
)

const transaccionesSlice = createSlice({
    name: 'transacciones',
    initialState: {
        transacciones: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTransaccionesByUsuario.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchTransaccionesByUsuario.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.transacciones = action.payload
            })
            .addCase(fetchTransaccionesByUsuario.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload
            });
    }
});

export default transaccionesSlice.reducer