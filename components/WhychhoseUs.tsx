'use client'
import React from "react";
import Image from "next/image";
import Icon1 from "../public/users.svg";
import Icon2 from "../public/settings.svg";
import Icon3 from "../public/calendar-days.svg";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function WhyChooseUs() {
    return (
        <div className="w-full py-16 md:py-24 lg:py-28 bg-gradient-to-br from-black  via-blue-900 to-[#1F011C]">
            {/* Section Title */}
            <div className="mb-12 text-center max-w-2xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Why Choose Us
                </h2>
                <p className="mt-4 text-base md:text-lg text-gray-300">
                    We combine innovation, expertise, and dedication to deliver solutions
                    that truly make a difference. Here’s what sets us apart:
                </p>
            </div>

            {/* Cards Grid */}
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 lg:px-20">
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
            </ul>
        </div>
    );
}

interface GridItemProps {
    icon: string;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
    return (
        <li className="min-h-[16rem] list-none">
            <div className="relative h-full rounded-2xl border border-gray-700 p-3 md:p-4 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 shadow-lg">
                <GlowingEffect
                    blur={0}
                    borderWidth={3}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-8">
                    <div className="relative flex flex-1 flex-col justify-between gap-4">
                        <div className="w-fit rounded-lg border border-gray-600 p-3 bg-gray-900/60">
                            <Image src={icon} alt="icon" className="h-6 w-6 md:h-8 md:w-8" />
                        </div>
                        <div className="space-y-3">
                            <h3 className="font-sans text-xl md:text-2xl font-semibold text-white">
                                {title}
                            </h3>
                            <p className="font-sans text-sm md:text-base text-gray-300">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
