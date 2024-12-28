import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Store/authSlice";

function Navbar() {
    const { isLoggedIn, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="relative min-h-20 overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 rounded-md">
            <header className="absolute inset-x-0 top-0 z-10 w-full border-x">
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
                            <a href="" className="flex">
                                <img className="w-auto h-8 rounded-full" src="/src/Images/Logo.png" alt="Logo" />
                            </a>
                        </div>
                        <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                            <Link to="/" className="text-base font-semibold text-white transition-all duration-200 hover:text-opacity-80"> Home </Link>
                            <Link to="/Pharmacy" className="text-base font-semibold text-white transition-all duration-200 hover:text-opacity-80"> Pharmacy </Link>
                            <Link to="/Departments" className="text-base font-semibold text-white transition-all duration-200 hover:text-opacity-80"> Departments </Link>
                            <Link to="/Appointments" className="text-base font-semibold text-white transition-all duration-200 hover:text-opacity-80"> Appointments </Link>
                            <Link to="/DoctorAppointments" className="text-base font-semibold text-white transition-all duration-200 hover:text-opacity-80"> Doctor's Appointments </Link>
                            <Link to="./Ambulance" className="text-base font-semibold text-white transition-all duration-200 hover:text-opacity-80"> Ambulance </Link>
                            <div className="flex items-center space-x-4">
                                {isLoggedIn ? (
                                    <>
                                        <img className="w-8 h-8 rounded-full" src="/src/Images/Logo5.png" alt="" />
                                        <button className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full bg-blue-500 text-white hover:bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400" onClick={() => dispatch(logout())}>Logout</button>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/Login" className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full bg-blue-500 text-white hover:bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400" role="button"> Login </Link>
                                        <Link to="/SignUp" className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full bg-blue-500 text-white hover:bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400" role="button"> Sign Up </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:hidden">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <a href="" className="flex">
                                <img className="w-auto h-8 rounded-full" src="/src/Images/Logo.png" alt="Logo" />
                            </a>
                        </div>
                        <div>
                            <link rel="stylesheet" href="https://unpkg.com/ionicons@5.5.2/dist/css/ionicons.min.css" />
                            <button className="bg-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                <ion-icon name={mobileMenuOpen ? "close" : "menu"} size="large"></ion-icon>
                            </button>
                        </div>
                    </div>
                    {mobileMenuOpen && (
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700">Home</Link>
                            <Link to="/Pharmacy" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700">Pharmacy</Link>
                            <Link to="/Departments" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700">Departments</Link>
                            <Link to="/Appointments" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700">Appointments</Link>
                            <Link to="/DoctorAppointments" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700">Doctor's Appointments</Link>
                            <Link to="./Ambulance" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700">Ambulance</Link>
                            <div>
                                {isLoggedIn ? (
                                    <>
                                        <img className="w-8 h-8 rounded-full" src="/src/Images/Logo5.png" alt="User Avatar" />
                                        <button onClick={() => dispatch(logout())} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700">Logout</button>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/Login" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700">Login</Link>
                                        <Link to="/SignUp" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700">Sign Up</Link>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}

export default Navbar;