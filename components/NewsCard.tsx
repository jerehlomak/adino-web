"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button"
import { motion } from "framer-motion";

interface NewsCardProps {
  imageSrc: string;
  id: number;
  title: string;
  category: string;
  description: string;
}

const NewsCard = ({
  imageSrc,
  id,
  title,
  category,
  description,
}: NewsCardProps) => {
  return (
    <div key={id} className="flex flex-col gap-4">
      <div className="relative">
        <div
          className="relative h-[220px] w-full lg:w-[300px] rounded-lg overflow-hidden"
        >
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg transform transition-transform duration-700 ease-in-out hover:scale-x-95 w-full h-full"
          />
        </div>

        <span className="absolute bottom-2 left-4 flex gap-2 py-1.5 pl-1 pr-3 items-center bg-[#4f4f4f] rounded-full">
          <span className="rounded-full p-2 bg-[#f0b643]"></span>
          <p className="text-[10px] font-lato text-white leading-[1.03]">{category}</p>
        </span>
      </div>
      <p className="text-[21px] font-lato text-[#181818] leading-[1.24] font-[400]">{description}</p>
      <div>
        <Button text="Read more" styles="bg-transparent" />
      </div>
    </div>
  );
};

export default NewsCard;
