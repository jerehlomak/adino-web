"use client";

import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import { clientData } from "@/constants";

// Custom Left Arrow
const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    className="absolute right-[60px] z-10 top-[-60px] transform bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition duration-300"
    onClick={onClick} 
  >
    <FaArrowLeft size={20} />
  </button>
);

// Custom Right Arrow
const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    className="absolute right-[-0px] z-10 top-[-60px] transform bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition duration-300"
    onClick={onClick}
  >
    <FaArrowRight size={20} />
  </button>
);

const Testimonial: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    initialSlide: 0,
    nextArrow: <CustomRightArrow />,
    prevArrow: <CustomLeftArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-8 px-4 w-full mx-auto">
      <Slider {...settings}>
        {clientData.map((item, index) => (
          <div key={index} className="px-4">
            <div className="bg-[#f7f7f7] flex flex-col justify-between h-[335px] gap-6 p-[50px] rounded-lg transition duration-300">
              <p className="text-[#333] text-[18px] font-lato leading-[1.5] tracking-wide">{item.text}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-300">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold font-sequel text-[16px]">{item.name}</p>
                  <p className="text-xs font-sequel text-[#333] text-[12px]">{item.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
