import React from "react";

function CustomerSupport() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 flex flex-col items-center justify-center p-4">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center">Customer Support</h1>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Name</label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Message</label>
                        <textarea
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            rows="4"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CustomerSupport;