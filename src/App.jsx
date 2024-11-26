import React from 'react';
import './main.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import DoctorAppointments from './components/DoctorAppointments';
import Works from './components/Works';
import DeliveryDetails from './components/DeliveryDetails';
import About from './components/About';
import Career from './components/Career';
import Development from './components/Development';
import Features from './components/Features'
import Home from './components/Home';
import Footer from './components/Footer';
import CustomerSupport from './components/CustomerSupport';
import Login from './components/Login';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivatePolicy';
import Pharmacy from './components/Pharmacy';
import Ambulance from './components/Ambulance';
import AppointmentsForm from './components/AppointmentsForm'
import Departments from './components/Departments';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';

function App() {
  
  const isAuthenticated = () => {
  // Replace this with your actual authentication logic
  return localStorage.getItem('userRole') === 'doctor';
  };

  return (
  <Router>
  <div>
  <Navbar />
  <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Pharmacy" element={<Pharmacy />} />
    <Route path="/Departments" element={<Departments />} />
    <Route path="/Appointments" element={<AppointmentsForm />} />
    <Route path="/Ambulance" element={<Ambulance />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/SignUP" element={<SignUp />} />
    <Route path="/CustomerSupport" element={<CustomerSupport />} />
    <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
    <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
    <Route path="/Works" element={<Works />} />
    <Route path="/DeliveryDetails" element={<DeliveryDetails />} />
    <Route path="/About" element={<About />} />
    <Route path="/Career" element={<Career />} />
    <Route path="/Development" element={<Development />} />
    <Route path="/Features" element={<Features />} />
    <Route
    path="/DoctorAppointments"
    element={isAuthenticated() ? <DoctorAppointments /> : <Navigate to="/Login" />}
    />
    </Routes>
  </>
  <Footer />
  </div>
  </Router>
  );
}

export default App;