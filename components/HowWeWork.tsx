"use client";

import { CardSpotlight } from "@/components/ui/card-spotlight";
import {
    Target,
    Map,
    Code,
    CheckCircle,
    Headphones,
} from "lucide-react";
import { Timeline } from "./ui/timeline";

export function HowWeWork() {
    const data = [
        {
            title: "Understand Your Goals",
            icon: Target,
            content: (

                <p>  We begin by deeply understanding your needs, challenges, and vision.</p>
            ),
        },
        {
            title: "Plan & Strategize",
            icon: Map,
            content: (
                <p>Our team creates a roadmap with clear milestones for smooth execution.</p>
            ),
        },

        {
            title: "Design & Develop",
            icon: Code,
            content: (
                <p>We build tailored solutions using modern tools and best practices.</p>
            ),
        },
        {
            title: "Test & Refine",
            icon: CheckCircle,
            content: (
                <p>Rigorous testing ensures quality, reliability, and performance.</p>
            ),
        },

        {
            title: "Deliver & Support",
            icon: Headphones,
            content: (
                <p>We deliver on time and provide ongoing support to ensure success.</p>
            ),
        },

    ];
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>

    );
}
