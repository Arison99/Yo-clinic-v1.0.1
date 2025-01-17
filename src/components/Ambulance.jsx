import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
    requestAmbulanceStart,
    requestAmbulanceSuccess,
    requestAmbulanceFailure,
} from "../Reducers/ambulanceReducer";

function Ambulance() {
    const [formData, setFormData] = useState({
        caretaker_name: '',
        patient_name: '',
        emergency: '',
        phone_number: '',
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
            const response = await axios.post("http://localhost:3000/api/ambulance-requests/", formData);
            dispatch(requestAmbulanceSuccess(response.data));
            console.log("Ambulance request submitted:", response.data);
        } catch (error) {
            dispatch(requestAmbulanceFailure("Failed to submit ambulance request"));
        }
    };

    return (
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400">
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border rounded bg-white">
                <h1 className="text-2xl font-semibold mb-4">Ambulance Request Form</h1>
                {error && <p className="text-red-500">{error}</p>}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1" htmlFor="caretaker_name">Care Taker's Name</label>
                    <input
                        type="text"
                        id="caretaker_name"
                        name="caretaker_name"
                        value={formData.caretaker_name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1" htmlFor="patient_name">Patient's Name</label>
                    <input
                        type="text"
                        id="patient_name"
                        name="patient_name"
                        value={formData.patient_name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1" htmlFor="emergency">Emergency</label>
                    <textarea
                        id="emergency"
                        name="emergency"
                        value={formData.emergency}
                        onChange={handleChange}
                        placeholder="Reason for Emergency Ambulance Request"
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1" htmlFor="phone_number">Phone Number</label>
                    <input
                        type="tel"
                        id="phone_number"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1" htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    );
}

export default Ambulance;