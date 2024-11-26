import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    requestAmbulanceStart,
    requestAmbulanceSuccess,
    requestAmbulanceFailure,
} from "../Reducers/ambulanceReducer";

function Ambulance() {
    const [formData, setFormData] = useState({
        caretakerName: '',
        patientName: '',
        emergency: '',
        phoneNumber: '',
        address: ''
    });

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.ambulance);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(requestAmbulanceStart());
        try {
            // Simulate an API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            dispatch(requestAmbulanceSuccess(formData));
            console.log("Ambulance request submitted:", formData);
        } catch (error) {
            dispatch(requestAmbulanceFailure("Failed to submit ambulance request"));
        }
    };

    return (
        <div class="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400">
            <form onSubmit={handleSubmit} class="max-w-lg mx-auto p-4 border rounded bg-white">
                <h1 class="text-2xl font-semibold mb-4">Ambulance Request Form</h1>
                {error && <p class="text-red-500">{error}</p>}
                <div class="mb-4">
                    <label class="block text-sm font-semibold mb-1" htmlFor="caretakerName">Care Taker's Name</label>
                    <input
                        type="text"
                        id="caretakerName"
                        name="caretakerName"
                        value={formData.caretakerName}
                        onChange={handleChange}
                        class="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-semibold mb-1" htmlFor="patientName">Patient's Name</label>
                    <input
                        type="text"
                        id="patientName"
                        name="patientName"
                        value={formData.patientName}
                        onChange={handleChange}
                        class="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-semibold mb-1" htmlFor="emergency">Emergency</label>
                    <textarea
                        id="emergency"
                        name="emergency"
                        value={formData.emergency}
                        onChange={handleChange}
                        placeholder="Reason for Emergency Ambulance Request"
                        class="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-semibold mb-1" htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        class="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-semibold mb-1" htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        class="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
}

export default Ambulance;