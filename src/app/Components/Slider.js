"use client"
import React from 'react'
// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Data for slides
const slidesData = [
    {
        id: 1,
        title: "Soil Health Matters",
        description: "“Regular soil testing ensures that crops get the right nutrients, improving yield and reducing fertilizer waste.”"
    },
    {
        id: 2,
        title: "Water Wisely",
        description: "“Efficient irrigation methods like drip irrigation can conserve water and boost crop health.”"
    },
    {
        id: 3,
        title: "Crop Rotation Benefits",
        description: "“Rotating crops prevents soil depletion, reduces pests, and improves overall farm productivity.”"
    },
    {
        id: 4,
        title: "Organic Fertilization",
        description: "“Using compost and organic fertilizers can enhance soil structure and support beneficial microorganisms.”"
    },
    {
        id: 5,
        title: "Pest Control Strategies",
        description: "“Integrated pest management (IPM) combines natural predators, crop selection, and safe pesticides for better control.”"
    },
    {
        id: 6,
        title: "Seasonal Planting",
        description: "“Planting crops at the right time of year maximizes growth potential and reduces disease risks.”"
    }
];


const Slider = () => {
    return (
        <div className='py-20'>
            <div className="header">
                <div className="heading text-[28px] text-center mb-5 md:mb-10 font-extrabold text-[#31511E] md:text-[32px]">Smart Farming Tips for Better Crop Yield</div>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={4}
                // navigation
                // pagination={{ clickable: true }}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                    320: { slidesPerView: 1 },  // Mobile: 1 slide
                    640: { slidesPerView: 2 },  // Tablet: 2 slides
                    1024: { slidesPerView: 3 }, // Small laptop: 3 slides
                    1280: { slidesPerView: 4 }  // Desktop: 4 slides
                }}
                speed={3000}
                freeMode={true}
            >
                {slidesData.map((slide) => (
                    <SwiperSlide key={slide.id} >
                        <div className='p-5 bg-[#92C957] rounded-md text-center shadow-md min-h-[140px] hover:scale-105 cursor-pointer'>
                            <h3 className="text-lg font-bold mb-3 text-[#1A1A19]">{slide.title}</h3>
                            <p className="text-sm text-[#FEFFF0]">{slide.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider;
