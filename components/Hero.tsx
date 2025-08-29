import { cn } from "@/lib/utils"
import Navbar from "./Navbar"
import { ArrowRight } from "lucide-react"
import ServicesCarousel from "./subcomponents/ServicesCarousel"
import CardGrids from "./subcomponents/CardGrids"
import { Spotlight } from "./ui/spotlight-new"
const Hero = () => {
    return (

        <div className="relative min-h-screen w-full overflow-hidden bg-[var(--lanx-bg)] dark:bg-[var(--lanx-bg-dark)]">

            <div className={cn("absolute inset-0 lanx-grid")} />
            <div className="pointer-events-none absolute inset-0 lanx-vignette bg-[var(--lanx-bg)] dark:bg-[var(--lanx-bg-dark)]" />
            <Spotlight />
            <Navbar />

            <div className="relative z-10 h-full flex flex-col items-center text-center pt-32">
                <span className="text-sm md:text-base text-gray-400 dark:text-gray-300 ">
                    Join <span className="font-semibold text-white">15,725+</span> customers
                </span>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                    The best platform <br className="hidden md:block" /> to grow your business
                </h1>

                <p className="mt-6 text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl">
                    Boost sales, hire the best people, and access exclusive market insights
                    with powerful tools built for growth.
                </p>

                <div className="mt-8 flex flex-row gap-4">
                    {/* Primary Button */}
                    <button className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white 
                         bg-pink-600 hover:bg-pink-700 transition overflow-hidden group">
                        <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:-translate-x-1">
                            Get Started Now
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                        </span>
                        <span className="absolute inset-0 rounded-xl border-2 border-pink-400 opacity-0 group-hover:opacity-100 animate-pulse"></span>
                    </button>

                    <button className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold 
                         bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white 
                         hover:bg-gray-200 dark:hover:bg-gray-700 transition overflow-hidden group">
                        <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:-translate-x-1">
                            Book a Demo
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                        </span>
                        <span className="absolute inset-0 rounded-xl border-2 border-gray-400 opacity-0 group-hover:opacity-100 animate-pulse"></span>
                    </button>
                </div>
                <div className="mt-10 w-full hidden md:flex">
                    <ServicesCarousel />
                </div>
                <div className="mt-10 w-full">
                    <CardGrids />
                </div>

            </div>
        </div>

    )
}

export default Hero
