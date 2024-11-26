import React from 'react';

const features = [
    {
        title: 'Online Appointments',
        description: 'Book appointments with our doctors online at your convenience.',
        icon: '📅',
    },
    {
        title: '24/7 Support',
        description: 'Our support team is available 24/7 to assist you with any queries.',
        icon: '🕒',
    },
    {
        title: 'Expert Doctors',
        description: 'Consult with our team of experienced and specialized doctors.',
        icon: '👨‍⚕️',
    },
    {
        title: 'Health Records',
        description: 'Access and manage your health records securely online.',
        icon: '📋',
    },
];

const Features = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Why Choose Yo Clinic
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Discover the benefits of using Yo Clinic for your healthcare needs.
                    </p>
                </div>
                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.title} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <span className="text-2xl">{feature.icon}</span>
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Features;