import React from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Store/authSlice";

function Navbar () {
    const { isLoggedIn } = useSelector((state) => state.auth);
    const dispatch = useDispatch()

    return (
   //navigation bar
 
   <div class="relative min-h-20 overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 rounded-md">
   <header class="absolute inset-x-0 top-0 z-10 w-full border-x">
       <div class="px-4 mx-auto sm:px-6 lg:px-8">
           <div class="flex items-center justify-between h-16 lg:h-20">
               <div class="flex-shrink-0">
                   <a href="" class="flex">
                       <img class="w-auto h-8" src="./Images/Logo.png" alt="" />
                   </a>
               </div>
  
               
  
               <div class="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                   <Link to="/" class="text-base font-semibold text-white transition-all duration-200 hover:text-opacity-80"> Home </Link>
  
                   <Link to="/Pharmacy" class="text-base font-semibold text-white transition-all duration-200 hover:text-opacity-80"> Pharmacy </Link>
  
                   <Link to="/Departments" class="text-base font-semibold text-white  transition-all duration-200 hover:text-opacity-80"> Departments </Link>
  
                   <Link to="/Appointments" class="text-base font-semibold text-white  transition-all duration-200 hover:text-opacity-80"> Appointments </Link>

                   <Link to="/DoctorAppointments" class="text-base font-semibold text-white  transition-all duration-200 hover:text-opacity-80"> Doctor's Appointments </Link>
  
                   <Link to="./Ambulance" class="text-base font-semibold text-white transition-all duration-200 hover:text-opacity-80"> Ambulance </Link>

                   <div>
                    {isLoggedIn ? (
                        <button onClick={() => dispatch(logout())}>Logout</button>
                    ) : (
                        <>
                         <Link to="/Login" class="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full bg-blue-500 text-white hover:bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400" role="button"> Login </Link>
                         <Link to="/SignUp" class="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full bg-blue-500 text-white hover:bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400" role="button"> Sign Up </Link>

                        </>
                    )}
                   </div>
  
                  
               </div>
           </div>
       </div>
   </header>
  
   
  
  
  </div>

    )
}

export default Navbar;