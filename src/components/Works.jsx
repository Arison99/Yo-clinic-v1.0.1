import React from 'react';

const Works = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-8">How Yo Clinic Works</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Step 1: Visit our Website </h2>
                    <p className="text-gray-700 font-semibold"> Check out our services. It's quick and easy!</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Step 2: Book an Appointment</h2>
                    <p className="text-gray-700 font-semibold">Choose a convenient time and date for your appointment with our specialists.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Step 3: Get Treated</h2>
                    <p className="text-gray-700 font-semibold">Visit our clinic and receive top-notch medical care from our experienced staff.</p>
                </div>
            </div>
        </div>
    );
};

export default Works;