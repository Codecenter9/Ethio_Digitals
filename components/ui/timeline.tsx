"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  icon?: React.ComponentType<any>;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-gradient-to-b from-black via-gray-950 to-black font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          How We Work
        </h2>
        <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
          Our process is simple, transparent, and focused on delivering impactful
          results at every stage.
        </p>
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto pb-10">
        {data.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex justify-start pt-10 md:gap-10 relative"
            >
              {/* Left sticky title + dot */}
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-purple-500 border border-neutral-300 dark:border-neutral-700" />
                </div>
                <h3 className="hidden md:block md:pl-20 md:text-xl font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
              </div>

              {/* Right card */}
              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <div className="bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-purple-800/20 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                  {/* Icon */}
                  {Icon && (
                    <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-tr from-purple-500 to-blue-500 text-white mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                  )}
                  {/* Right title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  {/* Content */}
                  <div className="text-neutral-300 leading-relaxed">
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Vertical line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
          from-transparent via-neutral-700 to-transparent
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
