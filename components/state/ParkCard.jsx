"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ParkCard = ({ park }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Link
            href={park.slug ? `/${park.slug}` : "#"}
            className="flex flex-col h-fit w-auto group cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Image */}
            <div className="h-[200px] group-hover:h-[180px] transition-all duration-500 w-full overflow-hidden">
                <img
                    src={park.image}
                    alt={park.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex py-7 px-4 flex-col justify-between group-hover:h-[260px] h-[240px] bg-white transition-all duration-500 border border-gray-200">
                <div className="flex flex-col gap-3">
                    <div className="w-full justify-between gap-5 1366:gap-2 flex items-center">
                        <h2 className="text-[20px] bw-sb">{park.title}</h2>
                        <span
                            className={`bw-sb text-[16px] ${park.statusColor} text-right`}
                        >
                            {park.status}
                        </span>
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <p className="text-[16px] bw-r">Area</p>
                        <span className="bw-sb text-[16px]">{park.area}</span>
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <p className="text-[16px] bw-r">Potential</p>
                        <span className="bw-sb text-[16px]">{park.potential}</span>
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <p className="text-[16px] bw-r">Usage</p>
                        <span className="bw-sb text-[16px]">{park.usage}</span>
                    </div>
                    {park.certification && (
                        <div className="flex w-full gap-2 justify-between items-center">
                            <p className="text-[16px] bw-r">Certification</p>
                            <span className="bw-sb text-[16px] text-right">
                                {park.certification}
                            </span>
                        </div>
                    )}
                </div>

                {/* Explore Park animation */}
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            key="explore"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: 0.3, duration: 0.2 },
                            }}
                            exit={{
                                opacity: 0,
                                y: 10,
                                transition: { duration: 0.2 },
                            }}
                            className="mt-4"
                        >
                            <Link
                                href={`/${park.slug}`}
                                className="text-[16px] uppercase leading-[20px] bw-sb text-[#f47920]"
                            >
                                Explore Park
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </Link>
    );
};

export default ParkCard;