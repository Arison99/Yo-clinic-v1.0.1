import React from "react";

const doctors = [
    "Dr. John Doe",
    "Dr. Jane Smith",
    "Dr. Emily Davis",
    "Dr. Michael Brown",
    "Dr. Sarah Wilson",
    "Dr. David Johnson",
    "Dr. Chris Lee",
    "Dr. Anna White",
    "Dr. James Green",
    "Dr. Laura Black",
    "Dr. Robert King",
    "Dr. Linda Scott",
    "Dr. William Harris",
    "Dr. Patricia Clark",
    "Dr. Charles Lewis",
    "Dr. Barbara Robinson",
    "Dr. Thomas Walker",
    "Dr. Jennifer Hall",
    "Dr. Daniel Young",
    "Dr. Elizabeth Allen",
];

function getRandomDoctor() {
    return doctors[Math.floor(Math.random() * doctors.length)];
}

const departments = [
    { name: "Cardiology", head: getRandomDoctor(), assistants: [getRandomDoctor(), getRandomDoctor()] },
    { name: "Neurology", head: getRandomDoctor(), assistants: [getRandomDoctor(), getRandomDoctor()] },
    { name: "Orthopedics", head: getRandomDoctor(), assistants: [getRandomDoctor(), getRandomDoctor()] },
    { name: "Pediatrics", head: getRandomDoctor(), assistants: [getRandomDoctor(), getRandomDoctor()] },
    { name: "Dermatology", head: getRandomDoctor(), assistants: [getRandomDoctor(), getRandomDoctor()] },
    { name: "Radiology", head: getRandomDoctor(), assistants: [getRandomDoctor(), getRandomDoctor()] },
];

function Departments() {
    return (
        <div className="p-8 bg-white rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400">
            <p className="text-5xl font-bold text-center text-gray-800 dark:text-white">
                Clinic Departments
            </p>
            <p className="mb-12 text-2xl font-normal text-center text-white">
                Meet the heads and assistant doctors of our departments
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {departments.map((department, index) => (
                    <div key={index} className="p-4">
                        <div className="flex-col flex justify-center items-center">
                            <div className="flex-shrink-0">
                                <a href="#" className="relative block">
                                    <img
                                        alt=""
                                        src="/src/Images/Logo5.png"
                                        className="mx-auto object-cover rounded-full h-20 w-20"
                                    />
                                </a>
                            </div>
                            <div className="mt-2 text-center flex flex-col">
                                <span className="text-lg font-normal text-gray-900">
                                    {department.head}
                                </span>
                                <span className="text-xl text-gray-900 font-semibold">
                                    {department.name}
                                </span>
                                <div className="mt-2">
                                    {department.assistants.map((assistant, idx) => (
                                        <div key={idx} className="flex-col flex justify-center items-center mt-2">
                                            <div className="flex-shrink-0">
                                                <a href="#" className="relative block">
                                                    <img
                                                        alt=""
                                                        src="/src/Images/Logo5.png"
                                                        className="mx-auto object-cover rounded-full h-16 w-16"
                                                    />
                                                </a>
                                            </div>
                                            <span className="text-sm text-gray-700 font-semibold mt-1">
                                                {assistant}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Departments;
