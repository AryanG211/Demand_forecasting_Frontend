import Image from 'next/image';
import React from 'react';
import MarketConnectivity from '../Assets/MarketConnectivity.svg';
import FinancialLoss from '../Assets/FinancialLoss.svg';
import ResourceAllocation from '../Assets/ResourceAllocation.svg';
import EmpowerFarming from '../Assets/EmpowerFarmers.svg';
import SustainableFarming from '../Assets/SustainableFarming.svg'

const Objectives = () => {
    const objectives = [
        {
            id: 1,
            img: MarketConnectivity,
            heading: "Enhance Market Connectivity",
            description: "Connect farmers with companies by providing real-time crop demand and pricing insights, ensuring fair trade opportunities."
        },
        {
            id: 2,
            img: FinancialLoss,
            heading: "Reduce Financial Losses",
            description: "Help farmers make informed decisions by predicting future crop demand, minimizing overproduction and market fluctuations."
        },
        {
            id: 3,
            img: ResourceAllocation,
            heading: "Optimize Resource Allocation",
            description: "Guide farmers on the best crops to grow based on market trends, climate conditions, and soil suitability."
        },
        {
            id: 4,
            img: EmpowerFarming,
            heading: "Empower Farmers with Data",
            description: "Provide farmers with analytical tools and AI-driven insights to maximize profits and improve productivity."
        },
        {
            id: 5,
            img: SustainableFarming,
            heading: "Promote Sustainable Farming",
            description: "Encourage responsible agricultural practices by aligning production with market demand, reducing waste, and improving food security."
        }
    ];
    return (
        <div className='py-10 px-10 bg-[#92C957]/50'>
            <div className="Header py-10 flex flex-col justify-center items-center">
                <div className="subHeading mb-2 text-[18px] text-[#31511E] relative after:content-[''] after:block after:w-28 after:h-[2px] after:bg-[#31511E] after:mt-1 ">What We Do</div>
                <div className="Heading text-5xl text-[#31511E] font-bold mb-5 leading-16">Our Objectives</div>
            </div>
            <div className="objectiveWrapper grid grid-cols-3 gap-5">
                {objectives.map((item) => (
                    <div key={item.id} className="objective flex gap-3 bg-[#FEFFF0] p-3 rounded-2xl shadow-md shadow-green-500">
                        <div className="imgBlock">
                            <Image src={item.img} alt={item.heading} className='w-[200px] h-auto'></Image>
                        </div>
                        <div className="infoBlock">
                            <div className="objHeading text-[#31511E] font-bold mb-3 text-[18px]">{item.heading}</div>
                            <hr className='py-2 border-t-2 border-[#31511E] ' />
                            <div className="objDescription">{item.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Objectives
