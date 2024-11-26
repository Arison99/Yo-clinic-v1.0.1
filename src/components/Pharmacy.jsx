import React from "react";

const drugs = [
    { name: "Aspirin", description: "Pain reliever and anti-inflammatory", image: "/src/Images/Aspirin.jpeg" },
    { name: "Ibuprofen", description: "Nonsteroidal anti-inflammatory drug", image: "/src/Images/Ibuprofen.jpeg" },
    { name: "Amoxicillin", description: "Antibiotic for bacterial infections", image: "/src/Images/Amoxicillin.jpeg" },
    { name: "Metformin", description: "Medication for type 2 diabetes", image: "/src/Images/Metformin.jpeg" },
    { name: "Lisinopril", description: "Medication for high blood pressure", image: "/src/Images/Lisinopril.jpeg" },
    { name: "Omeprazole", description: "Medication for acid reflux", image: "/src/Images/Omeprazole.jpeg" },
    { name: "Simvastatin", description: "Medication for high cholesterol", image: "/src/Images/Simvastatin.jpeg" },
    { name: "Levothyroxine", description: "Thyroid hormone replacement", image: "/src/Images/Levothyroxine.jpeg" },
    { name: "Azithromycin", description: "Antibiotic for bacterial infections", image: "/src/Images/Azithromycin.jpeg" },
    { name: "Amlodipine", description: "Medication for high blood pressure", image: "/src/Images/Amlodipine.jpeg" },
    { name: "Hydrochlorothiazide", description: "Diuretic for high blood pressure", image: "/src/Images/Hydrochlorothiazide.jpeg" },
    { name: "Gabapentin", description: "Medication for nerve pain", image: "/src/Images/Gabapentin.jpeg" },
    { name: "Sertraline", description: "Antidepressant", image: "/src/Images/Sertraline.jpeg" },
    { name: "Furosemide", description: "Diuretic for fluid retention", image: "/src/Images/Furosemide.jpeg" },
    { name: "Metoprolol", description: "Beta blocker for high blood pressure", image: "/src/Images/Metoprolol.jpeg" },
    { name: "Pantoprazole", description: "Medication for acid reflux", image: "/src/Images/Pantoprazole.jpeg" },
    { name: "Prednisone", description: "Corticosteroid for inflammation", image: "/src/Images/Prednisone.jpeg" },
    { name: "Tramadol", description: "Pain reliever", image: "/src/Images/Tramadol.jpeg" },
    { name: "Citalopram", description: "Antidepressant", image: "/src/Images/Citalopram.jpeg" },
    { name: "Montelukast", description: "Medication for allergies and asthma", image: "/src/Images/Montelukast.jpeg" },
    { name: "Trazodone", description: "Antidepressant", image: "/src/Images/Trazodone.jpeg" },
    { name: "Meloxicam", description: "Nonsteroidal anti-inflammatory drug", image: "/src/Images/Meloxicam.jpeg" },
    { name: "Clonazepam", description: "Medication for anxiety and seizures", image: "/src/Images/Clonazepam.jpeg" },
    { name: "Fluoxetine", description: "Antidepressant", image: "/src/Images/Fluoxetine.jpeg" },
    { name: "Lorazepam", description: "Medication for anxiety", image: "/src/Images/Lorazepam.jpeg" },
    { name: "Cyclobenzaprine", description: "Muscle relaxant", image: "/src/Images/Cyclobenzaprine.jpeg" },
    { name: "Glipizide", description: "Medication for type 2 diabetes", image: "/src/Images/Glipizide.jpeg" },
    { name: "Warfarin", description: "Anticoagulant", image: "/src/Images/Warfarin.jpeg" },
    { name: "Zolpidem", description: "Medication for insomnia", image: "/src/Images/Zolpidem.jpeg" },
    { name: "Clopidogrel", description: "Antiplatelet medication", image: "/src/Images/Clopidogrel.jpeg" },
    { name: "Allopurinol", description: "Medication for gout", image: "/src/Images/Allopurinol.jpeg" },
    { name: "Doxycycline", description: "Antibiotic for bacterial infections", image: "/src/Images/Doxycycline.jpeg" },
    { name: "Atenolol", description: "Beta blocker for high blood pressure", image: "/src/Images/Atenolol.jpeg" },
    { name: "Loratadine", description: "Antihistamine for allergies", image: "/src/Images/Loratadine.jpeg" },
    { name: "Ranitidine", description: "Medication for acid reflux", image: "/src/Images/Ranitidine.jpeg" },
    { name: "Paracetamol", description: "Pain relieviing medication", image:"/src/Images/Paracetamol.jpeg"},
];

function Pharmacy() {
    return (
        <div className="p-8 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400">
            <h1 className="text-white text-4xl font-semibold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 rounded-md p-4">
                Welcome to Yo' Pharmacy
            </h1>
            <p className="mb-12 font-semibold text-3xl text-center text-white">
                Here are some of the drugs prescribed at Yo' Clinic
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {drugs.map((drug, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                        <div className="flex-col flex justify-center items-center">
                            <div className="flex-shrink-0">
                                <a href="#" className="relative block">
                                    <img
                                        alt={drug.name}
                                        src={drug.image}
                                        className="mx-auto object-cover rounded-xl h-35 w-50"
                                    />
                                </a>
                            </div>
                            <div className="mt-2 text-center flex flex-col">
                                <span className="text-lg font-semibold text-gray-900">
                                    {drug.name}
                                </span>
                                <span className="text-sm text-gray-700 font-semibold mt-1">
                                    {drug.description}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pharmacy;