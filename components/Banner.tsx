"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const sectors = [
    { title: "Capital", image: "/images/banner3.png", top: "-top-10" },
    { title: "Partners", image: "/images/banner4.png", top: "-top-6" },
    { title: "Global Markets", image: "/images/banner2.png", top: "-top-10" },
    { title: "Asset Management", image: "/images/banner1.png", top: "-top-32" },
  ];

  return (
    <section className="py-8 px-4 lg:px-12">
      <div className="w-full flex flex-col gap-6 justify-center bg-[#166636] rounded-[50px] px-8 lg:px-16 py-12 lg:py-28 text-white relative">
        <p className="text-sm">SECTORS WE SPECIALIZE IN</p>
        {sectors.map((sector, index) => (
          <div
            key={index}
            className="relative flex items-center"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.h1
              className="text-[40px] lg:text-[60px] font-[100] cursor-pointer flex items-center"
              initial={{ x: 0, textShadow: "2px 2px rgba(255, 255, 255, 0)" }}
              animate={
                hoveredIndex === index
                  ? { x: 20, textShadow: "4px 2px rgba(255, 255, 255, 0.7)" }
                  : { x: 0, textShadow: "2px 2px rgba(255, 255, 255, 0)" }
              }
              transition={{ duration: 0.4 }}
            >
              
              {sector.title}
              {hoveredIndex === index && (
                <span className="hidden lg:block ml-4 px-4 py-4 rounded-full bg-[#ad9056]">
                  <FaLongArrowAltRight color="white" size={24} />
                </span> 
              )}
            </motion.h1>
            
            {hoveredIndex === index && (
              <motion.div
                className={`hidden lg:block absolute ${sector.top} right-0 h-[260px] w-[400px] object-cover rounded-xl overflow-hidden`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                transition={{ duration: 0.9 }}
              >
                <Image
                  src={sector.image}
                  alt={sector.title}
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
