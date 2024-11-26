import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    bookAppointmentStart,
    bookAppointmentSuccess,
    bookAppointmentFailure,
} from "../Reducers/appointmentsReducer";

function AppointmentsForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        appointmentDate: '',
        appointmentTime: '',
        department: '',
        doctorName: ''
    });

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.appointments);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(bookAppointmentStart());
        try {
            // Simulate an API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            dispatch(bookAppointmentSuccess(formData));
            console.log("Appointment booked:", formData);
        } catch (error) {
            dispatch(bookAppointmentFailure("Failed to book appointment"));
        }
    };

    return (
        <div class="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400">
            <form onSubmit={handleSubmit} class="max-w-lg mx-auto p-4 border rounded bg-white">
                <p class="font-sans text-center font-semibold leading-none">Appointments Form</p>
                {error && <p class="text-red-500">{error}</p>}
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone Contact</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="appointmentDate">Date for Appointment</label>
                    <input
                        type="date"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleChange}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="appointmentTime">Time for Appointment</label>
                    <input
                        type="time"
                        name="appointmentTime"
                        value={formData.appointmentTime}
                        onChange={handleChange}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">Department</label>
                    <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="doctorName">Doctor's Name</label>
                    <input
                        type="text"
                        name="doctorName"
                        value={formData.doctorName}
                        onChange={handleChange}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div class="flex items-center justify-between">
                    <button
                        type="submit"
                        class="bg-blue-500 hover:bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AppointmentsForm;