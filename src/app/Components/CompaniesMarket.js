"use client";
import React, { useEffect, useState } from "react";
import { BsFillFilterCircleFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

const CompaniesMarket = () => {
    const [marketData, setMarketData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedCrop, setSelectedCrop] = useState("");
    const [minPrice, setMinPrice] = useState(1000);
    const [maxPrice, setMaxPrice] = useState(4000);
    const router = useRouter();

    useEffect(() => {
        fetch("/data/marketData.json")
            .then((response) => response.json())
            .then((data) => {
                setMarketData(data);
                setFilteredData(data);
            })
            .catch((error) => console.error("Error loading data:", error));
    }, []);

    useEffect(() => {
        filterData();
    }, [selectedCrop, minPrice, maxPrice]);

    const filterData = () => {
        let filtered = marketData;

        if (selectedCrop) {
            filtered = filtered.filter((deal) => deal.crop === selectedCrop);
        }

        filtered = filtered.filter(
            (deal) => deal.pricePerQuintal >= minPrice && deal.pricePerQuintal <= maxPrice
        );

        setFilteredData(filtered);
    };

    const handleProceed = (deal) => {
        router.push(`/company/${deal.id}`);
    };

    return (
        <div className="py-10 px-10">
            <div className="header py-10 flex flex-col gap-4">

                <div className="font-bold  text-4xl text-center text-[#31511E]">Companies Market</div>
                <div className="subHeading text-center text-[#31511E]">Connecting farmers with the best market deals—filter by crop, compare prices, and sell smarter!</div>
            </div>

            {/* Filters Section */}

            <div className="flex  items-center gap-2 mb-2 font-extrabold text-[#31511E]"><BsFillFilterCircleFill className="text-[#31511E] text-2xl" />Filters: </div>
            <div className="flex flex-wrap gap-4 mb-6 bg-[#92C957]/70 p-5">
                {/* Crop Filter */}
                <select
                    className="border px-4 py-2 rounded-md shadow-md bg-[#FEFFF0] focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    value={selectedCrop}
                    onChange={(e) => setSelectedCrop(e.target.value)}
                >
                    <option value="">All Crops</option>
                    <option value="Rice">Rice</option>
                    <option value="Wheat">Wheat</option>
                    <option value="Jowar">Jowar</option>
                    <option value="Bajari">Bajari</option>
                    <option value="Soybeans">Soybeans</option>
                </select>

                {/* Price Range Filter */}
                <div className="flex items-center gap-2">
                    <label className="text-[#31511E]">Min Price:</label>
                    <input
                        type="number"
                        min="1000"
                        max="4000"
                        value={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                        className="border px-3 py-2 rounded-md shadow-md w-24 bg-[#FEFFF0] focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />

                    <label className="text-[#31511E]">Max Price:</label>
                    <input
                        type="number"
                        min="1000"
                        max="4000"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className="border px-3 py-2 rounded-md bg-[#FEFFF0] shadow-md w-24 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                </div>
            </div>

            {/* Deals Listing */}
            <div className="grid grid-cols-2 gap-4">
                {filteredData.map((deal) => (
                    <div key={deal.id} className="border p-4 flex rounded-lg shadow-md bg-[#92C957]/20">
                        <div className="info w-[70%]">
                            <h2 className="text-lg font-semibold">{deal.company}</h2>
                            <p className="text-[#31511E]">Crop: <strong>{deal.crop}</strong></p>
                            <p className="text-[#31511E]">Required: <strong>{deal.requiredQuintals} quintals</strong></p>
                            <p className="text-[#31511E]">Price: <strong>₹{deal.pricePerQuintal} per quintal</strong></p>
                        </div>
                        <button
                            onClick={() => handleProceed(deal)}
                            className="cursor-pointer bg-[#92C957] text-[#1A1A19] px-3 py-2 rounded-md shadow-green-800 shadow-md hover:scale-110 hover:shadow-green-500 hover:bg-[#31511E] hover:text-[#FEFFF0] transition-all h-fit w-[30%]"
                        >
                            Proceed to Deal
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompaniesMarket;
