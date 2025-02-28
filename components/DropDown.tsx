"use client"

import Image from "next/image"
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link"
import { useDropdown } from "@/context/DropdownContext";

const DropDown = () => {
  const { openDropdown, setOpenDropdown } = useDropdown();
  const items = [
    {
      title: "Capital",
      image: "/images/icons.png",
      url: "/capital",
      text: "Grow with Adino Capital.",
    },
    {
      title: "Partners",
      image: "/images/icons2.png",
      url: "/asset-partners",
      text: "Building Success Together.",
    },
    {
      title: "Global Market",
      image: "/images/icons3.png",
      url: "/market",
      text: "Your Market Edge.",
    },
    {
      title: "Asset Management",
      image: "/images/icons4.png",
      url: "/asset-management",
      text: "Smart Asset Solutions.",
    },
  ]
  return (
    <div className="dropdown-container absolute z-[9999] top-16 left-0 mt-2 mx-auto w-full bg-white text-black shadow-lg rounded-[30px] p-5 transition-all duration-500">
        <div className="w-full grid grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <Link onClick={() => setOpenDropdown(false)} href={item.url} className="flex gap-4 items-center" key={idx}>
              <div className="flex gap-2 items-center">
                <Image 
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="h-10 w-10"
                />
                <div className="flex flex-col gap-2">
                  <p className="font-[500] text-[20px] leading-6 whitespace-nowrap">Adino <br />{item.title}</p>
                  <p className="text-sm whitespace-nowrap">{item.text}</p>
                </div>
              </div>
              <FaArrowRight size={24} className="text-[#166636]" />
            </Link>
          ))}
        </div>
    </div>
  )
}

export default DropDown