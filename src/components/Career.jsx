import React from 'react';

const Career = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold text-center mb-6">Join Our Team</h1>
                <p className="text-gray-700 mb-4 font-semibold">
                    At Yo Clinic, we are always looking for talented and passionate individuals to join our team. If you are interested in making a difference in the healthcare industry, we would love to hear from you.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
                <ul className="list-disc list-inside mb-6">
                    <li className="mb-2 font-semibold">
                        <strong>Position:</strong> Frontend Developer
                        <br />
                        <strong>Location:</strong> Remote
                        <br />
                        <strong>Description:</strong> We are looking for a skilled frontend developer with experience in React and Tailwind CSS.
                    </li>
                    <li className="mb-2 font-semibold" >
                        <strong>Position:</strong> Backend Developer
                        <br />
                        <strong>Location:</strong> Remote
                        <br />
                        <strong>Description:</strong> We are seeking a backend developer with experience in Node.js and MongoDB.
                    </li>
                    <li className="mb-2 font-semibold">
                        <strong>Position:</strong> UI/UX Designer
                        <br />
                        <strong>Location:</strong> Remote
                        <br />
                        <strong>Description:</strong> We need a creative UI/UX designer to help us improve our user experience.
                    </li>
                    <li className="mb-2 font-semibold">
                      <strong>Position:</strong> General Practitioner
                             <br />
                              <strong>Location:</strong> On-site
                             <br />
                      <strong>Description:</strong> We are looking for a dedicated General Practitioner to join our team and provide high-quality medical care to our patients.
                    </li>
                    <li className="mb-2 font-semibold">
                     <strong>Position:</strong> Pediatrician
                         <br />
                     <strong>Location:</strong> On-site
                         <br />
                     <strong>Description:</strong> We need a compassionate Pediatrician to care for our younger patients and provide specialized medical care.
                    </li>
                    <li className="mb-2 font-semibold">
                     <strong>Position:</strong> Nurse
                         <br />
                    <strong>Location:</strong> On-site
                         <br />
                     <strong>Description:</strong> We are seeking a skilled Nurse to assist in patient care and support our medical team.
                    </li>
                </ul>
                
                <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
                <p className="text-gray-700 mb-4">
                    If you are interested in any of the positions listed above, please send your resume and a cover letter to <a href="mailto:careers@yoclinic.com" className="text-blue-500">careers@yoclinic.com</a>.
                </p>
            </div>
        </div>
    );
};

export default Career;
