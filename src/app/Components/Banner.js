"use client"
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';

const Banner = ({ imgMob, imgDesk, HomeContent, AboutContent, MarketContent, demandContent }) => {
    const router = useRouter();
    return (

        <div className='relative '>

            {/* Desktop Image (hidden on mobile) */}
            <Image className="w-full h-auto hidden md:block" src={imgDesk} alt="Desktop Banner" />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-[#E8EEF1] from-0%" /> */}

            {/* Mobile Image (hidden on larger screens) */}
            <Image className="w-full h-auto block md:hidden" src={imgMob} alt="Mobile Banner" />
            {HomeContent &&
                <div className='absolute left-0 top-0 bottom-0   w-[40%] flex justify-center flex-col gap-2 text-[#FEFFF0] p-3'>
                    <div className="content flex flex-col gap-3  p-9 rounded-xl bg-black/30">

                        <div className="heading text-6xl font-extrabold ">
                            Demand For The Future
                        </div>
                        <div className="description">
                        Committed to revolutionizing agriculture with innovative farming solutions.
                        </div>
                        <div className="buttonGrid flex gap-8 ">
                            <button className='cursor-pointer  bg-[#92C957]  text-[#1A1A19] px-3 py-2 rounded-md shadow-green-800 shadow-md hover:scale-110 hover:shadow-green-500  hover:bg-[#31511E] hover:text-[#FEFFF0] transition-all' onClick={() => { router.push('/demand') }}>Show Demand</button>
                            <button className='cursor-pointer  bg-[#92C957]  text-[#1A1A19] px-3 py-2 rounded-md shadow-green-800 shadow-md hover:scale-110 hover:shadow-green-500  hover:bg-[#31511E] hover:text-[#FEFFF0] transition-all' onClick={() => { router.push('/market') }}>Market</button>
                        </div>
                    </div>
                </div>
            }
            {AboutContent &&
                <div className='absolute left-0 top-0 bottom-0  w-full flex justify-center  text-[#FEFFF0]'>
                    <div className="content flex justify-center items-center flex-col gap-3 w-full  p-9  bg-black/30">

                        <div className="heading text-6xl font-extrabold ">
                            About Us
                        </div>
                        <div className="description">
                        We are dedicated to providing innovative solutions that empower businesses and individuals to thrive through advanced technology and sustainable practices.
                        </div>

                    </div>
                </div>
            }
            {MarketContent &&
                <div className='absolute left-0 top-0 bottom-0  w-full flex justify-center  text-[#FEFFF0]'>
                    <div className="content flex justify-center items-center flex-col gap-3 w-full  p-9  bg-black/30">

                        <div className="heading text-6xl font-extrabold ">
                            Market Place
                        </div>
                        <div className="description">
                        A marketplace connects buyers and sellers, enabling seamless transactions and facilitating the exchange of goods and services in a dynamic environment.
                        </div>

                    </div>
                </div>
            }
            {demandContent &&
                <div className='absolute left-0 top-0 bottom-0  w-full flex justify-center  text-[#FEFFF0]'>
                    <div className="content flex justify-center items-center flex-col gap-3 w-full  p-9  bg-black/30">

                        <div className="heading text-6xl font-extrabold ">
                            Demand Forecasting
                        </div>
                        <div className="description">
                        Demand forecasting predicts future customer demand using historical data and analytics, helping businesses optimize inventory and production planning.
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}

export default Banner;



