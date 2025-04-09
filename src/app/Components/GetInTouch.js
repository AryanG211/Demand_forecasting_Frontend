"use client"
import Image from 'next/image';
import React from 'react';
import GetInTouchImg from '../Assets/GetInTouch.svg';

const GetInTouch = () => {
    const handleConnect = () => {
        window.location.href = "mailto:contact@example.com"; // Correct way to open an email client
    };

    return (
        <div className="relative">
            <Image className="w-full h-auto" src={GetInTouchImg} alt="Get in touch image" />
            <div className="absolute left-0 top-0 inset-0 bg-black opacity-50" />
            <div className="absolute left-0 top-0 bottom-0 w-full flex justify-center items-center flex-col">
                <div className="title text-[#FEFFF0] text-4xl font-extrabold mb-2">Get In Touch</div>
                <button
                    className="cursor-pointer bg-[#92C957] text-[#1A1A19] px-3 py-2 rounded-md shadow-green-800 shadow-md 
                               hover:scale-110 hover:shadow-green-500 hover:bg-[#31511E] hover:text-[#FEFFF0] transition-all"
                    onClick={handleConnect}
                >
                    Let's Connect
                </button>
            </div>
        </div>
    );
};

export default GetInTouch;
