"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import React from "react";
import FarmerContact from '../../Assets/FarmerContact.jpeg';

const CompanyDealPage = () => {
    const params = useParams();
    const companyId = parseInt(params.id);

    const [deal, setDeal] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        pincode: "",
        quantity: "",
        message: "",
    });
    const [filledFields, setFilledFields] = useState({});
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        fetch("/data/marketData.json")
            .then((response) => response.json())
            .then((data) => {
                const foundDeal = data.find((item) => item.id === companyId);
                setDeal(foundDeal);
            })
            .catch((error) => console.error("Error loading data:", error));
    }, [companyId]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleBlur = (e) => {
        setFilledFields({ ...filledFields, [e.target.name]: e.target.value.trim() !== "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);
    };

    if (!deal) return <div className="text-center text-red-500">Deal not found!</div>;

    return (
        <div className="p-6 mx-auto">
            <div className="wrapper grid grid-cols-2 gap-10">
                <div className="imageBlock">
                    <div className="Header">
                        <h1 className="text-2xl font-bold mb-4 text-[#31511E]">
                            Company Name: {deal.company}
                        </h1>
                        <div className="border p-4 rounded-lg shadow-md mb-6">
                            <div className="text-2xl font-bold">Deal Details</div>
                            <h2 className="text-gray-600">Crop Name: <strong>{deal.crop}</strong></h2>
                            <p className="text-gray-600">Required: <strong>{deal.requiredQuintals} quintals</strong></p>
                            <p className="text-gray-600">Price: <strong>₹{deal.pricePerQuintal} per quintal</strong></p>
                        </div>
                    </div>
                    <Image src={FarmerContact} alt="Contact Image" className="rounded-md shadow-md shadow-emerald-700" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 bg-[#92C957]/20 p-10 rounded-md shadow-md shadow-gray-950 h-fit">
                    <h2 className="text-xl font-bold mb-4">Farmer Details</h2>

                    {["name", "phone", "address", "pincode", "quantity", "message"].map((field) => (
                        <div key={field}>
                            <label className="block text-sm font-medium capitalize">{field}</label>
                            {field === "address" || field === "message" ? (
                                <textarea
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    rows="3"
                                    className={`w-full p-2 border rounded focus:border-[#31511E] ${filledFields[field] ? "bg-[#92C957]" : "bg-white"
                                        }`}
                                ></textarea>
                            ) : (
                                <input
                                    type={field === "quantity" || field === "pincode" ? "number" : "text"}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    className={`w-full p-2 border rounded focus:border-[#31511E] ${filledFields[field] ? "bg-[#92C957]" : "bg-white"
                                        }`}
                                />
                            )}
                        </div>
                    ))}

                    <button type="submit" className="cursor-pointer  bg-[#92C957]  text-[#1A1A19] px-3 py-2 rounded-md shadow-green-800 shadow-md hover:scale-110 hover:shadow-green-500  hover:bg-[#31511E] hover:text-[#FEFFF0] transition-all">
                        Submit
                    </button>
                </form>
            </div>

            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
                    <div className="bg-white p-6 rounded-md shadow-lg max-w-sm text-center">
                        <h3 className="text-lg font-bold text-green-700">Submission Successful!</h3>
                        <p className="text-gray-700 mt-2">
                            If the company ensures that your requirements match theirs, they will contact you via the provided phone number or email.
                        </p>
                        <button onClick={() => setShowPopup(false)} className="cursor-pointer  bg-[#92C957]  text-[#1A1A19] px-3 py-2 rounded-md shadow-green-800 shadow-md hover:scale-110 hover:shadow-green-500  hover:bg-[#31511E] hover:text-[#FEFFF0] transition-all">
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CompanyDealPage;
