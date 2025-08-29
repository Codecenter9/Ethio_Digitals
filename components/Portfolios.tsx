"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { Github, Code } from "lucide-react";
import Image from "next/image";
import projectImage from "../public/project.png";
import Link from "next/link";

export function Portfolio() {
    const projects = [
        {
            title: "Aceternity UI",
            desc: "Customizable Tailwind CSS and Framer Motion Components.",
            href: "/",
        },
        {
            title: "Smart Campus",
            desc: "IoT-powered campus management system with AI integration.",
            href: "/",
        },
        {
            title: "Pharmacy System",
            desc: "Dynamic sales & inventory management system for pharmacies.",
            href: "/",
        },
    ];

    return (
        <section className="min-h-[50rem] bg-gradient-to-bl from-gray-950 via-gray-900 to-black w-full py-20 px-6">
            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Our Recent Works
                </h2>
                <p className="text-slate-400 mt-2">
                    A collection of projects showcasing creativity, innovation, and quality.
                </p>
            </div>

            {/* Cards Container */}
            <div className="grid grid-cols-1  rotate-x-5 -rotate-y-5 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center ">
                {projects.map((project, idx) => (
                    <PinContainer key={idx} title="Visit Now" href={project.href}>
                        <div className="flex flex-col tracking-tight w-[23rem]">
                            {/* Image */}
                            <div className="w-full h-40 rounded-lg overflow-hidden relative mb-3">
                                <Image
                                    src={projectImage}
                                    alt={project.title}
                                    className="object-cover"
                                    sizes="100%"
                                    fill
                                />
                            </div>

                            {/* Title & Description */}
                            <h3 className="mt-4 font-bold text-2xl text-white py-3">
                                {project.title}
                            </h3>
                            <p className="text-lg text-slate-400 mb-4">
                                {project.desc}
                            </p>

                            {/* Bottom Section */}
                            <div className="flex items-center justify-between pt-3 border-t border-slate-700 mt-auto">
                                <div className="flex gap-3 text-slate-400 text-lg">
                                    <Github className="hover:text-white cursor-pointer transition-colors" />
                                    <Code className="hover:text-white cursor-pointer transition-colors" />
                                </div>
                                <Link
                                    href={project.href}
                                    className="px-4 py-1.5 text-sm rounded-lg bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 text-white font-semibold hover:opacity-90 transition"
                                >
                                    Visit
                                </Link>
                            </div>
                        </div>
                    </PinContainer>
                ))}
            </div>
        </section>
    );
}
