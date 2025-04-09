import Image from 'next/image'
import React from 'react'
const ImgText = ({ imgText, subHeading, Heading, Description }) => {
    return (
        <div className='my-20 px-10'>
            <div className="gridbox grid grid-cols-2 gap-5">
                <div className="imgBlock">
                    <Image src={imgText} className='w-full h-auto' alt='Image with text'></Image>
                </div>
                <div className="infoBlock">
                    <div className="subHeading mb-5 text-[18px] text-[#92C957] relative after:content-[''] after:block after:w-28 after:h-[2px] after:bg-[#31511E] after:mt-1 ">{subHeading}</div>

                    <div className="Heading text-5xl text-[#31511E] font-bold mb-5 leading-16">{Heading}</div>
                    <div className="description text-[#1A1A19]">{Description}</div>
                </div>
            </div>
        </div>
    )
}

export default ImgText
