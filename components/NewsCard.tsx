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

        <span className="absolute bottom-4 left-4 flex gap-2 py-2 px-2 items-center bg-[#4f4f4f] rounded-full">
          <span className="rounded-full p-2 bg-[#f0b643]"></span>
          <p className="text-xs text-white">{category}</p>
        </span>
      </div>
      <p className="text-[16px] font-[500]">{description}</p>
      <div>
        <Button text="Read more" styles="bg-transparent" />
      </div>
    </div>
  );
};

export default NewsCard;
