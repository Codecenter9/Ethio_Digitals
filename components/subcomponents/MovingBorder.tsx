"use client";
import React, { useRef } from "react";
import {
    motion,
    useAnimationFrame,
    useMotionTemplate,
    useMotionValue,
    useTransform,
} from "motion/react";

export function Border({
    borderRadius = "1.75rem",
    children,
    as: Component = "button",
    containerClassName,
    borderClassName,
    duration,
    className,
    ...otherProps
}: {
    borderRadius?: string;
    children: React.ReactNode;
    as?: any;
    containerClassName?: string;
    borderClassName?: string;
    duration?: number;
    className?: string;
    [key: string]: any;
}) {
    return (
        <Component
            className={`relative overflow-hidden bg-transparent p-[2px] text-xl ${containerClassName}`}
            style={{
                borderRadius: borderRadius,
            }}
            {...otherProps}
        >
            {/* Glow Border */}
            <div className="absolute inset-0">
                <MovingBorder duration={duration} rx="30%" ry="30%">
                    <div
                        className={`h-36 w-36 rounded-full 
                        bg-[radial-gradient(circle,rgba(156,9,248,0.95)_0%,rgba(156,9,248,0.7)_40%,transparent_80%)] 
                         opacity-90 ${borderClassName}`}
                    />
                </MovingBorder>
            </div>

            {/* Content */}
            <div
                className={`relative flex h-full w-full flex-col items-start justify-start 
                border border-slate-800 bg-slate-900/[0.85] 
                text-sm text-white antialiased backdrop-blur-xl ${className}`}
                style={{
                    borderRadius: `calc(${borderRadius} * 0.96)`,
                }}
            >
                {children}
            </div>
        </Component>
    );
}

export const MovingBorder = ({
    children,
    duration = 8000, // slower
    rx,
    ry,
    ...otherProps
}: {
    children: React.ReactNode;
    duration?: number;
    rx?: string;
    ry?: string;
    [key: string]: any;
}) => {
    const pathRef = useRef<any>();
    const progress = useMotionValue<number>(0);

    // Random phase offset so cards don't sync
    const phase = useRef(Math.random() * 2000).current;

    useAnimationFrame((time) => {
        const length = pathRef.current?.getTotalLength();
        if (length) {
            const pxPerMillisecond = length / duration;
            progress.set(((time + phase) * pxPerMillisecond) % length);
        }
    });

    const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x);
    const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y);

    const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="absolute h-full w-full"
                width="100%"
                height="100%"
                {...otherProps}
            >
                <rect
                    fill="none"
                    width="100%"
                    height="100%"
                    rx={rx}
                    ry={ry}
                    ref={pathRef}
                />
            </svg>
            <motion.div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    display: "inline-block",
                    transform,
                }}
            >
                {children}
            </motion.div>
        </>
    );
};
