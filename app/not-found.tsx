"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-white to-blue-100 overflow-hidden text-center">

            <motion.div
                className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-3xl"
                animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ top: "-50px", left: "-50px" }}
            />
            <motion.div
                className="absolute w-80 h-80 bg-blue-400/30 rounded-full blur-3xl"
                animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                style={{ bottom: "-60px", right: "-60px" }}
            />

            <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 10 }}
                className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 drop-shadow-lg z-10"
            >
                404
            </motion.h1>

            <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-4 text-2xl font-semibold text-gray-800 z-10"
            >
                Oops! Page Not Found
            </motion.h2>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-2 text-gray-600 max-w-md z-10"
            >
                Sorry, the page you are looking for does not exist or has been moved.
            </motion.p>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-6 z-10"
            >
                <Link
                    href="/"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
                >
                    Go Home
                </Link>
            </motion.div>
        </div>
    );
}
