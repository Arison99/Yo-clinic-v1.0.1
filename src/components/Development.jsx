/**
 * Development component for Yo Clinic.
 * 
 * This component renders a development page with a message indicating that the page is under development.
 * It includes a title, a message, and two buttons for navigation.
 * 
 * @component
 * @example
 * return (
 *   <Development />
 * )
 */
import React from 'react';

const Development = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Yo Clinic Development Page</h1>
            <p className="text-lg text-gray-600 mb-8">
                This page is currently under development. Please check back later for updates.
            </p>
            <div className="flex space-x-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400">
                    Home
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400">
                    Contact Us
                </button>
            </div>
        </div>
    );
};

export default Development;