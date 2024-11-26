import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    error: null,
    loading: false,
};

// Async thunk for signing up
export const signUp = createAsyncThunk('auth/signUp', async (formData, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/signup/', formData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// Async thunk for logging in
export const login = createAsyncThunk('auth/login', async ({ email, password }, { rejectWithValue }) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/token/', { email, password });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signOut: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.error = null;
            state.loading = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;
            })
            .addCase(signUp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { signOut } = authSlice.actions;

export default authSlice.reducer;