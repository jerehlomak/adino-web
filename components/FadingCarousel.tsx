"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselItems = [
  { id: 1, image: "/images/slider1.jpeg", text: "Item 1" },
  { id: 2, image: "/images/slider2.jpeg", text: "Item 2" },
  { id: 3, image: "/images/slider3.jpeg", text: "Item 3" },
  { id: 4, image: "/images/slider4.jpeg", text: "Item 4" },
  { id: 5, image: "/images/slider5.jpeg", text: "Item 5" },
];

const FadingCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1.5 } },
    ],
  };

  return (
    <div
      className="relative w-full max-w-5xl mx-auto overflow-hidden"
      // style={{
      //   backgroundImage: "url('/images/background.png')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-white via-transparent to-transparent z-10 pointer-events-none"></div>

      <Slider {...settings}>
        {carouselItems.map((item) => (
          <div key={item.id} className="px-2 relative">
            <div className="rounded-lg overflow-hidden">
              <div className="relative h-[461px]">
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-[395px] h-full rounded-[50px] object-cover" 
                />        
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/50 to-white opacity-30"></div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FadingCarousel;
