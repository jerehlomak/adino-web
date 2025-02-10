"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselItems = [
  { id: 1, image: "/images/about4.png", text: "Item 1" },
  { id: 2, image: "/images/about5.png", text: "Item 2" },
  { id: 3, image: "/images/capital3.png", text: "Item 3" },
];

const FadingCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div
      className="relative w-full max-w-5xl mx-auto py-10 overflow-hidden"
      // style={{
      //   backgroundImage: "url('/images/background.png')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* Left Fade Effect */}
      <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-white via-transparent to-transparent z-10 pointer-events-none"></div>

      <Slider {...settings}>
        {carouselItems.map((item) => (
          <div key={item.id} className="px-2 relative">
            <div className="rounded-lg overflow-hidden">
              {/* Image with Fade Effect */}
              <div className="relative h-[22rem]">
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-full h-full object-cover"
                />        
                {/* Image fade overlay */}
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
