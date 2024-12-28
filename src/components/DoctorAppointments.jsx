import React, { useState, useEffect } from "react";
import axios from "axios";

const jsonifyData = (data) => {
    return {
        id: data.id,
        first_name: JSON.stringify(data.first_name),
        last_name: JSON.stringify(data.last_name),
        phone: JSON.stringify(data.phone),
        address: JSON.stringify(data.address),
        appointment_date: JSON.stringify(data.appointment_date),
        appointment_time: JSON.stringify(data.appointment_time),
        department: JSON.stringify(data.department),
        doctor_name: JSON.stringify(data.doctor_name),
    };
};

function DoctorAppointments() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/doctor-appointments");
                console.log("Fetched appointments:", response.data);

                // Flatten the array of appointments
                const flattenedData = response.data.flatMap(item => item.appointments);
                console.log("Flattened data:", flattenedData);

                // Filter out repeated data based on first name
                const uniqueAppointments = [];
                const firstNameSet = new Set();

                flattenedData.forEach(item => {
                    const firstName = item.first_name;
                    if (!firstNameSet.has(firstName)) {
                        firstNameSet.add(firstName);
                        uniqueAppointments.push(item);
                    }
                });

                console.log("Filtered unique appointments:", uniqueAppointments);

                // Jsonify the unique appointments
                const jsonifiedAppointments = uniqueAppointments.map((appointment, index) => ({
                    ...jsonifyData(appointment),
                    id: index + 1, // Assign unique ID starting from 1
                }));
                console.log("Jsonified appointments for display:", jsonifiedAppointments);

                setAppointments(jsonifiedAppointments);
            } catch (error) {
                console.error("Error fetching appointments:", error);
            }
        };

        fetchAppointments();
    }, []);

    return (
        <div className="p-8 bg-white rounded-lg ml-72">
            <p className="font-semibold text-center text-3xl leading-none text-gray-600">Doctor's Appointments</p>
            {appointments.length > 0 ? (
                appointments.map((appointment) => (
                    <div key={appointment.id} className="mt-4 border p-4 rounded-lg shadow-md bg-gray-100 max-w-2xl">
                        <p><strong>First Name:</strong> {appointment.first_name}</p>
                        <p><strong>Last Name:</strong> {appointment.last_name}</p>
                        <p><strong>Phone:</strong> {appointment.phone}</p>
                        <p><strong>Address:</strong> {appointment.address}</p>
                        <p><strong>Date:</strong> {appointment.appointment_date}</p>
                        <p><strong>Time:</strong> {appointment.appointment_time}</p>
                        <p><strong>Department:</strong> {appointment.department}</p>
                        <p><strong>Doctor Name:</strong> {appointment.doctor_name}</p>
                    </div>
                ))
            ) : (
                <p>No appointments available.</p>
            )}
        </div>
    );
}

export default DoctorAppointments;
