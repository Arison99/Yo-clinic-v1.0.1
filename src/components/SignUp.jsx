import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../Reducers/authReducer";

function SignUp() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        department: "",
        email: "",
        esn: ""
    });

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp(formData));
    };

    return (
        <div class="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400">
            <form onSubmit={handleSubmit} class="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Department:</label>
                    <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Employee Security Number (ESN):</label>
                    <input
                        type="text"
                        name="esn"
                        value={formData.esn}
                        onChange={handleChange}
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button type="submit" class="bg-blue-500 hover:bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={loading}>
                    {loading ? "Submitting..." : "Sign Up"}
                </button>
                {error && <p class="text-red-500 mt-4">{error}</p>}
            </form>
        </div>
    );
}

export default SignUp;