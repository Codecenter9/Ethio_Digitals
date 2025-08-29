"use client";

import React from "react";
import ArrowUp from "../../public/trending-up.svg";
import Image from "next/image";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


const HeroCard = () => {
    const websolutions = [
        {
            title: "SEO Optimization",
            icon: ArrowUp,
        },
        {
            title: "UI/UX Excellence",
            icon: ArrowUp,
        },
        {
            title: "High Performance",
            icon: ArrowUp,
        },
    ];

    const graphics = [
        {
            title: "Creative Design",
            icon: ArrowUp,
        },
        {
            title: "Innovative Ideas",
            icon: ArrowUp,
        },
        {
            title: "Advanced Tools",
            icon: ArrowUp,
        },
    ];

    // Dummy chart data
    const data = [
        { name: "Jan", uv: 4000 },
        { name: "Feb", uv: 3000 },
        { name: "Mar", uv: 5000 },
        { name: "Apr", uv: 2780 },
        { name: "May", uv: 3890 },
        { name: "Jun", uv: 4390 },
        { name: "Jul", uv: 4490 },
    ];

    return (
        <div className="relative  w-full flex flex-col md:flex-row items-start gap-8">

            <div className="flex-1 relative">
                <div className="p-[3px] rounded-2xl bg-gradient-to-b from-pink-500 to-gray shadow-xl">
                    <div className="p-5 md:p-8 rounded-2xl bg-gradient-to-t from-gray-950 via-gray-900 to-gray-950 text-white">
                        <div className="text-start ">
                            <h1 className="text-3xl font-bold">Work With Us</h1>
                            <p className="mt-4 text-gray-300">
                                Join our team of passionate developers and designers to create
                                innovative digital solutions that make a real impact.
                            </p>

                            <div className="relative mt-8">
                                <div className="flex-1 p-8 mb-5 md:w-[450px] rounded-2xl shadow-xl bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 text-white">
                                    <p className="text-gray-300 mb-6">
                                        Track your performance over time with real-time insights.
                                    </p>
                                    <div className="h-42">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <LineChart data={data}>
                                                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                                                <XAxis dataKey="name" stroke="#888" />
                                                <YAxis stroke="#888" />
                                                <Tooltip />
                                                <Line type="monotone" dataKey="uv" stroke="#38bdf8" strokeWidth={2} />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 text-white p-3 rounded-xl shadow-lg md:absolute md:-bottom-10 md:right-20 md:transform md:translate-x-1/4 md:w-[90%] hover:translate-x-3 hover:-translate-y-4 transition-transform duration-300">
                                    {/* Web Solutions */}
                                    <div className="flex flex-col gap-3 ">
                                        {websolutions.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between bg-gray-800/70 p-2 rounded-xl border border-gray-700 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300"
                                            >
                                                <div>
                                                    <span className="block font-semibold">{item.title}</span>
                                                </div>
                                                <Image src={item.icon} alt={item.title} width={28} height={28} />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Graphics */}
                                    <div className="flex flex-col gap-4">
                                        {graphics.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between bg-gray-800/70 p-2 rounded-xl border border-gray-700 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300"
                                            >
                                                <div>
                                                    <span className="block font-semibold">{item.title}</span>
                                                </div>
                                                <Image src={item.icon} alt={item.title} width={28} height={28} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
