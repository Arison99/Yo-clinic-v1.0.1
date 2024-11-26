import React from "react";


function PrivacyPolicy() {
    const currentDate = new Date().toLocaleDateString();

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-sm text-gray-600 mb-8 font-semibold">Last updated: {currentDate} </p>
            
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
                <p className="text-gray-700 leading-relaxed font-semibold">
                    Welcome to Yo-Clinic. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at <a href="mailto:support@yo-clinic.com" className="text-blue-500 underline">support@yo-clinic.com</a>.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed font-semibold">
                    We collect personal information that you voluntarily provide to us when registering at the Services, expressing an interest in obtaining information about us or our products and services, when participating in activities on the Services, or otherwise contacting us.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
                <p className="text-gray-700 font-semibold leading-relaxed">
                    We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Sharing Your Information</h2>
                <p className="text-gray-700 font-semibold leading-relaxed">
                    We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
                <p className="text-gray-700 font-semibold leading-relaxed">
                    If you have questions or comments about this policy, you may email us at <a href="mailto:support@yo-clinic.com" className="text-blue-500 underline">support@yo-clinic.com</a> or by post to:
                </p>
                <address className="text-gray-700 leading-relaxed">
                    Yo-Clinic<br />
                    1234 Health St.<br />
                    Wellness City, HC 56789<br />
                </address>
            </section>
        </div>
    );
}

export default PrivacyPolicy;