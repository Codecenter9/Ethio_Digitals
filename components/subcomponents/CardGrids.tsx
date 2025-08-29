
import React from 'react'
import LottieFile from './LottieFile'
import HeroCard from './HeroCard'
import { CardSpotlight } from '../ui/card-spotlight'

const CardGrids = () => {
    return (
        <>
            <CardSpotlight className="flex flex-col items-center gap-3 bg-gradient-to-b from-gray via-gray-900 via-black  via-gray-800 to-black mt-8">

                <div className="p-0 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full">
                        {/* First row */}
                        <div className=" p-4 md:col-span-2">
                            <LottieFile />
                        </div>
                        <div className="p-4 md:col-span-3">
                            <HeroCard />
                        </div>
                    </div>
                </div>
            </CardSpotlight>

        </>
    )
}

export default CardGrids
