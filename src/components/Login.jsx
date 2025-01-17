import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { login } from "../Reducers/authReducer";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(login.pending());
        const data = { email, password };
        try {
            const response = await axios.post("http://localhost:3000/api/login", data);
            console.log(response.data);
            dispatch(login.fulfilled(response.data));
            localStorage.setItem('userRole', 'doctor'); // Set user role in local storage
            navigate("/DoctorAppointments"); // Route to doctor appointments page
        } catch (error) {
            console.error("There was an error!", error);
            dispatch(login.rejected(error.response ? error.response.data : { message: "Internal Server Error" }));
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <button type="submit" className="w-full font-semibold bg-blue-500 text-white py-2 rounded hover:bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>
                {error && <p className="text-red-500 mt-4">{error.message}</p>}
            </form>
        </div>
    );
}

export default Login;
