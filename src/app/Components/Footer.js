import React from 'react';
import logo from '../Assets/Logo.png';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='bg-[#1A1A19] text-[#FEFFF0] p-10 grid grid-cols-4 gap-3 justify-evenly'>
            {/* col-1 */}
            <div className='flex flex-col gap-3'>
                <div className="imgBlock">
                    <Image src={logo} className='w-[200px] h-auto' alt='Logo'></Image>
                </div>


            </div>


            <div className="socialIcons ">
                <div className="Description mb-2">
                Agroscope is dedicated to enhancing crop production through innovative solutions that promote sustainable farming practices. The platform focuses on improving agricultural productivity and supporting farmers with the tools they need for long-term success.
                </div>
                <div className="title  text-[#92C957] font-bold mb-3">Follow Us</div>
                <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-blue-600 text-2xl hover:text-blue-800" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-blue-400 text-2xl hover:text-blue-600" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-pink-500 text-2xl hover:text-pink-700" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-blue-700 text-2xl hover:text-blue-900" />
                    </a>
                </div>
            </div>
            <div className="QuickLinks   space-y-4">

                <div className="title  text-[#92C957] font-bold mb-3">Quick Links</div>
                <Link className='block hover:text-[#92C957] ' href={'/home'}>Home</Link>
                <Link className='block hover:text-[#92C957]' href={'/demand'}>Demand</Link>
                <Link className='block hover:text-[#92C957]' href={'/market'}>Market</Link>
                <Link className='block hover:text-[#92C957]' href={'/about'}>About</Link>
            </div>
            <div className="contactUs">
                <div className="title  text-[#92C957]  font-bold mb-3">Contact Us</div>
                <div className="space-y-4 no-underline text-[#FEFFF0]">
                    <div className="flex items-center space-x-3">
                        <FaPhone className="text-green-600 text-xl w-[20px] h-auto shrink-0" />
                        <a href="tel:+919876543210" className="hover:text-[#92C957]">
                            +91 98765 43210
                        </a>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaEnvelope className="text-red-600 text-xl w-[20px] h-auto shrink-0" />
                        <a
                            href="mailto:contact@agroscope.com"
                            className="hover:text-[#92C957]"
                        >
                            contact@agroscope.com
                        </a>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaGlobe className="text-purple-600 text-xl w-[20px] h-auto shrink-0" />
                        <a
                            href="https://www.agroscope-farming.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#92C957]"
                        >
                             www.agroscope-farming.com
                        </a>
                    </div>
                    <div className="flex items-baseline space-x-3">
                        <FaMapMarkerAlt className="text-blue-600 text-xl w-[20px] h-auto shrink-0" />
                        <a
                            href="https://www.google.com/maps?q=123+Main+Street,+New+Delhi,+India"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#92C957]"
                        >
                            123 Main Street, New Delhi, India Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Similique, deserunt!
                        </a>
                    </div>
                </div>
            </div>

            {/* <div className="aboutShort">
                <div className="title  text-[#92C957] font-bold mb-3">About US</div>
                <div className="content">AgriFutures Australia proudly focuses on building a rich future for Australian agriculture. We live and work in the regions and represent the interests and aspirations of primary producers and rural communities, delivering real value in everything we do.</div>
            </div> */}
        </div>
    )
}

export default Footer
