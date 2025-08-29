import Marquee from "react-fast-marquee";
import {
    Globe,
    Smartphone,
    Palette,
    Cloud,
    Cpu,
    ShieldCheck,
    Database,
    ShoppingCart,
} from "lucide-react";

const services = [
    { icon: <Globe className="w-7 h-7 text-blue-400" />, label: "Web Development" },
    { icon: <Smartphone className="w-7 h-7 text-green-400" />, label: "App Development" },
    { icon: <Palette className="w-7 h-7 text-pink-400" />, label: "UI/UX Design" },
    { icon: <Cloud className="w-7 h-7 text-sky-400" />, label: "Cloud Solutions" },
    { icon: <Cpu className="w-7 h-7 text-purple-400" />, label: "AI Integration" },
    { icon: <ShieldCheck className="w-7 h-7 text-red-400" />, label: "Cybersecurity" },
    { icon: <Database className="w-7 h-7 text-yellow-400" />, label: "Database Management" },
    { icon: <ShoppingCart className="w-7 h-7 text-orange-400" />, label: "E-commerce Solutions" },
];

export default function ServicesCarousel() {
    return (
        <div className="relative mx-auto py-6 overflow-hidden">
            <Marquee
                gradient={false}
                speed={25}
                pauseOnHover={true}
                className="flex space-x-20 text-3xl font-bold text-gray-100"
            >
                {services.map((service, idx) => (
                    <span
                        key={idx}
                        className="flex items-center gap-3 px-5"
                    >
                        {service.icon} {service.label}
                    </span>
                ))}
            </Marquee>
        </div>
    );
}
