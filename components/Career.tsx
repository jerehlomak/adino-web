import React from 'react';
import Image from 'next/image';

import Button from './Button';

const Career = () => {
  return (
    <section className="px-4 lg:px-12 py-8 text-[18px]">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 w-full items-center relative">
        {/* Left Section */}
        <div className="w-full bg-[#f3f8f7] px-8 py-12 lg:py-24 flex flex-col gap-6 lg:gap-8 rounded-[20px] z-10">
          <p className="text-[18px] font-semibold">Career</p>
          <div>
            <h1 className="text-[40px] leading-[52px] lg:text-[64px] lg:leading-[72px]">Join us!</h1>
            <h1 className="text-[40px] leading-[52px] lg:text-[64px] lg:leading-[72px]">We are growing.</h1>
          </div>
          <p className="max-w-[405px]">
            Be part of our journey! We’re expanding and looking for passionate individuals to join our team. Explore opportunities to grow with us and make an impact.
          </p>
          <div>
            <Button text="Explore careers" styles="bg-white text-[#166636]" />
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full lg:-ml-16 z-10">
          <Image
            src="/images/growing.png"
            alt="career"
            width={400}
            height={400}
            className="w-full h-[400px] rounded-[20px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Career;
