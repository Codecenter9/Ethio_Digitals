"use client";

import Link from "next/link";
import { useState } from "react";
import Menu from "../public/align-right.svg";
import Close from "../public/x.svg";
import Image from 'next/image';

const Navbar = () => {
    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
    ];
    const [active, setActive] = useState("home");
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="h-max py-5 px-8 navbar_gradient flex justify-between items-center fixed top-0 w-full z-999 text-white">
            {/* Left */}
            <div className="text-xl font-bold text-blue-600">Ethio Digitals</div>

            {/* Center */}
            <ul className="list-none hidden md:flex justify-center items-center mr-8">
                {links.map((link, index) => (
                    <li key={link.path}>
                        <Link
                            href={link.path}
                            className={`font-poppins font-normal cursor-pointer text-[18px] ${active === link.path ? "text-white" : "text-dimWhite"
                                } ${index === links.length - 1 ? "mr-0" : "mr-10"}`}
                            onClick={() => setActive(link.path)}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="md:hidden flex flex-1 justify-end items-center">
                <Image src={toggle ? Close : Menu}
                    alt="toggle"
                    onClick={() => setToggle((prev) => !prev)}
                    className="w-[28px] h-[28px] object-contain cursor-pointer"
                />

                <div
                    className={`${!toggle ? "hidden" : "flex"
                        } p-6 absolute top-23 right-0 mt-[-25px] min-w-[240px] navbar_gradient rounded-xl`}
                >
                    <ul className="list-none flex justify-end items-start flex-col">
                        {links.map((link, index) => (
                            <li
                                key={link.path}
                                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === link.path ? "text-white" : "text-dimWhite"
                                    } ${index === links.length - 1 ? "mb-0" : "mb-4"}`}
                                onClick={() => setActive(link.path)}
                            >
                                <Link href={link.path}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;

