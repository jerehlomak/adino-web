import React from "react";
import Image from "next/image"
import Button from "./Button";

interface NewsCardProps {
    imageSrc: string;
    id: number;
    title: string;
    category: string;
    description: string;
}

const NewsCard = ({ imageSrc, id, title, category, description } : NewsCardProps) => {
  return (
    <div key={id} className="flex flex-col gap-4">
      <div className="relative">
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={260}
          className="h-[220px] w-full lg:w-[300px] rounded-lg object-cover"
        />
        <span className="absolute bottom-4 left-4 flex gap-2 py-2 px-2 items-center bg-[#4f4f4f] rounded-full">
          <span className="rounded-full p-2 bg-[#f0b643]"></span>
          <p className="text-xs text-white">{category}</p>
        </span>
      </div>
      <p className="text-[16px] font-[500]">{description}</p>
      {/* <div>
        <Button text="Read more" styles="bg-transparent" />
      </div> */}
    </div>
  );
};

export default NewsCard;
