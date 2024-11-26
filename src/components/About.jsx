import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 flex flex-col items-center justify-center p-4">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl w-full">
                <h1 className="text-4xl font-bold text-center mb-4">About Yo Clinic</h1>
                <p className="text-gray-700 text-lg mb-4">
                    Welcome to Yo Clinic, where we prioritize your health and well-being. Our team of experienced professionals is dedicated to providing top-notch medical care and personalized treatment plans to meet your unique needs.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                    At Yo Clinic, we believe in a holistic approach to healthcare, combining the latest medical advancements with compassionate care. Our state-of-the-art facilities and cutting-edge technology ensure that you receive the best possible treatment.
                </p>
                <p className="text-gray-700 text-lg mb-4">
                    Whether you're visiting us for a routine check-up or seeking specialized care, you can trust that you're in good hands. Thank you for choosing Yo Clinic as your healthcare provider.
                </p>
                <div className="flex justify-center mt-6">
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 transition duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;