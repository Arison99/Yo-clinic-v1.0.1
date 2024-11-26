import { createSlice } from "@reduxjs/toolkit";

const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState: {
        appointments: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchAppointmentsStart: (state) => {
            state.loading = true;
        },
        fetchAppointmentsSuccess: (state, action) => {
            state.appointments = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchAppointmentsFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        bookAppointmentStart: (state) => {
            state.loading = true;
        },
        bookAppointmentSuccess: (state, action) => {
            state.appointments.push(action.payload);
            state.loading = false;
            state.error = null;
        },
        bookAppointmentFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        cancelAppointmentSuccess: (state, action) => {
            state.appointments = state.appointments.filter(
                (appointment) => appointment.id !== action.payload.id
            );
        },
    },
});

export const {
    fetchAppointmentsStart,
    fetchAppointmentsSuccess,
    fetchAppointmentsFailure,
    bookAppointmentStart,
    bookAppointmentSuccess,
    bookAppointmentFailure,
    cancelAppointmentSuccess,
} = appointmentsSlice.actions;

export default appointmentsSlice.reducer;