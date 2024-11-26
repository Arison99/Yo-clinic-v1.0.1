import { createSlice } from "@reduxjs/toolkit";

const ambulanceSlice = createSlice({
    name: 'ambulance',
    initialState: {
        requests: [],
        loading: false,
        error: null,
    },
    reducers: {
        requestAmbulanceStart: (state) => {
            state.loading = true;
        },
        requestAmbulanceSuccess: (state, action) => {
            state.requests.push(action.payload);
            state.loading = false;
            state.error = null;
        },
        requestAmbulanceFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const {
    requestAmbulanceStart,
    requestAmbulanceSuccess,
    requestAmbulanceFailure,
} = ambulanceSlice.actions;

export default ambulanceSlice.reducer;