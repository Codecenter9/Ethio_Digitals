"use client";
import React from "react";
import Image from "next/image";
import Icon1 from "../public/users.svg";
import Icon2 from "../public/settings.svg";
import Icon3 from "../public/calendar-days.svg";
import { Border } from "./subcomponents/MovingBorder";
import { CardSpotlight } from "./ui/card-spotlight";

export function Services() {
    return (
        <CardSpotlight className="w-full py-16 md:py-24 lg:py-28 bg-gradient-to-tr from-black via-blue-900 to-[#1F011C]">
            {/* Section Title */}
            <div className="mb-12 text-center max-w-2xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Our Services
                </h2>
                <p className="mt-4 text-base md:text-lg text-gray-300">
                    We combine innovation, expertise, and dedication to deliver solutions
                    that truly make a difference. Here’s what sets us apart:
                </p>
            </div>

            {/* Cards Grid */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 lg:px-20">
                <GridItem
                    icon={Icon1}
                    title="Expert Team"
                    description="Our team of professionals brings years of experience and diverse expertise, ensuring every project is built with precision and innovation."
                />

                <GridItem
                    icon={Icon2}
                    title="Cutting-Edge Technology"
                    description="We leverage the latest tools, AI-driven insights, and best practices to deliver reliable, scalable, and future-ready solutions."
                />

                <GridItem
                    icon={Icon3}
                    title="Commitment to Excellence"
                    description="From planning to execution, we are dedicated to exceeding expectations and creating long-lasting value for our clients."
                />
                <GridItem
                    icon={Icon3}
                    title="Commitment to Excellence"
                    description="From planning to execution, we are dedicated to exceeding expectations and creating long-lasting value for our clients."
                />
            </ul>
        </CardSpotlight>
    );
}

interface GridItemProps {
    icon: string;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
    return (
        <Border
            borderRadius="1.75rem"
            className="bg-slate-900/80 text-white border-slate-800 p-5"
        >
            <li className="min-h-[16rem] list-none space-y-4 flex flex-col items-start justify-start">
                <div className="w-fit rounded-lg border border-cyan-500/40 p-3 bg-cyan-500/10">
                    <Image src={icon} alt="icon" className="h-7 w-7 md:h-9 md:w-9" />
                </div>
                <div className="space-y-2 text-start">
                    <h3 className="font-sans text-xl md:text-2xl font-semibold text-white">
                        {title}
                    </h3>
                    <p className="font-sans text-sm md:text-base text-gray-300">
                        {description}
                    </p>
                </div>
            </li>
        </Border>
    );
};
