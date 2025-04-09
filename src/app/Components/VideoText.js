import React from 'react'

const VideoText = () => {
    return (
        <div className="py-20 px-10 bg-[#92C957]/50">
            <div className="gridbox grid grid-cols-1 md:grid-cols-2 gap-5 items-center ">

                {/* Info Section */}
                <div className="infoBlock">
                    <div className="subHeading mb-5 text-[18px] text-[#92C957] relative after:content-[''] after:block after:w-28 after:h-[2px] after:bg-[#31511E] after:mt-1">
                        About AgroScope Marketpalce
                    </div>

                    <div className="Heading text-5xl text-[#31511E] font-bold mb-5 leading-16">
                        AgroScope Marketplace
                    </div>
                    <div className="description text-[#1A1A19]">
                    Agroscope Marketplace is a platform designed to connect farmers, suppliers, and buyers within the agricultural sector. It facilitates the buying and selling of agricultural products, seeds, machinery, and services, streamlining the supply chain and boosting market access. The platform leverages data analytics to provide insights into market trends, pricing, and demand forecasts, empowering users to make informed decisions. Whether you're a farmer looking to sell crops or a supplier offering farming solutions, Agroscope Marketplace offers a seamless, reliable environment for all stakeholders in the agricultural ecosystem.
                    </div>
                </div>
                {/* Video Section */}
                <div className="videoBlock">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/7cEStg9OA2Q?si=x_azO52oZdxeN43H" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>
            </div>
        </div>
    )
}

export default VideoText

