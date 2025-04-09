"use client";
import React, { useState } from "react";
import icon from "../Assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
    const [isClick, setIsClick] = useState(false);
    const router = useRouter();
    const pathname = usePathname(); // Get current route

    const toggleNavbar = () => {
        setIsClick(!isClick);
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Demand", href: "/demand" },
        { name: "Market", href: "/market" },
        { name: "About", href: "/about" }
    ];

    return (
        <div className="sticky top-0  z-50">
            <div className="bg-[#1A1A19] px-2 py-2 flex justify-between items-center  font-bold">
                <div className="Logo flex items-center cursor-pointer" onClick={() => router.push("/")}>
                    <Image src={icon} alt="Logo" className="w-[150px] h-[auto]" />
                    {/* <div className="text-[#E8EEF1] text-[24px]">Neural Security</div> */}
                </div>
                <div className="hidden md:flex text-[18px] gap-2 text-[#FEFFF0]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`inline-block py-1 px-3 rounded-sm hover:text-[#92C957] relative ${pathname === link.href ? "text-[#92C957] after:content-[''] after:absolute after:left-0 after:bottom-[-1px] after:w-full after:h-[2px] after:bg-[#859F3D]" : ""
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className="md:hidden block text-[#FEFFF0]">
                    <button onClick={toggleNavbar}>{isClick ? "Close" : "Open"}</button>
                </div>
            </div>

            {isClick && (
                <div className="block bg-[#1A1A19] p-2 text-[#FEFFF0]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`block p-2 hover:text-[#92C957] relative ${pathname === link.href ? "text-[#92C957] after:content-[''] after:absolute after:left-0 after:bottom-[-1px] after:w-full after:h-[2px] after:bg-[#43B0F1]" : ""
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Navbar;