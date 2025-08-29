"use client";

import animationData from "../../public/Laptop3.json";
import { useLottie } from "lottie-react";

const LottieFile = () => {
    const defaultOptions = {
        animationData: animationData,
        loop: true,
    };

    const { View } = useLottie(defaultOptions);

    return (
        <>
            <div className="">
                <div className="w-full">{View}</div>
            </div>
        </>
    );
};

export default LottieFile;