import React, { useState, useEffect } from "react";
import AppointmentsForm from "./AppointmentsForm"; // Import the AppointmentsForm component

function DoctorAppointments() {
    const [appointments, setAppointments] = useState([]);

    // Example data, replace this with actual data fetching logic
    useEffect(() => {
        const fetchAppointments = async () => {
            // Replace this with actual API call
            const data = [
                {
                    id: 1,
                    firstName: "John",
                    lastName: "Doe",
                    phone: "123-456-7890",
                    address: "123 Main St",
                    appointmentDate: "2024-10-21",
                    appointmentTime: "10:00",
                },
                {
                    id: 2,
                    firstName: "Jane",
                    lastName: "Smith",
                    phone: "987-654-3210",
                    address: "456 Elm St",
                    appointmentDate: "2024-10-22",
                    appointmentTime: "14:00",
                },
            ];
            setAppointments(data);
        };

        fetchAppointments();
    }, []);

    const addAppointment = (newAppointment) => {
        setAppointments((prevAppointments) => [...prevAppointments, newAppointment]);
    };

    return (
        <div className="p-8 bg-white rounded-lg">
            <p className="font-sans text-center font-semibold leading-none">Doctor's Appointments</p>
            <AppointmentsForm addAppointment={addAppointment} /> {/* Include the form component */}
            <table className="min-w-full bg-white mt-4">
                <thead>
                    <tr>
                        <th className="py-2">First Name</th>
                        <th className="py-2">Last Name</th>
                        <th className="py-2">Phone</th>
                        <th className="py-2">Address</th>
                        <th className="py-2">Date</th>
                        <th className="py-2">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment) => (
                        <tr key={appointment.id}>
                            <td className="border px-4 py-2">{appointment.firstName}</td>
                            <td className="border px-4 py-2">{appointment.lastName}</td>
                            <td className="border px-4 py-2">{appointment.phone}</td>
                            <td className="border px-4 py-2">{appointment.address}</td>
                            <td className="border px-4 py-2">{appointment.appointmentDate}</td>
                            <td className="border px-4 py-2">{appointment.appointmentTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DoctorAppointments;