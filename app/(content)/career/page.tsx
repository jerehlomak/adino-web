"use client"

import React from "react";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.compat.css"

import { Button, FadingCarousel } from "@/components";
import { careerData } from "@/constants";

const Career = () => {
  return (
    <section className="py-16">
      
      <div className="px-4 lg:px-12 pb-12 pt-4 flex flex-col lg:flex-row gap-8 lg:gap-16">
        
        <div className="w-full lg:w-1/2 flex flex-col gap-4 text-center lg:text-left">
          <p className="text-[14px] text-[#666] font-lato font-[500]">CAREERS</p>
          <h1 className="font-sequel text-[#181818] text-[45px] leading-[45px] lg:text-[64px] lg:max-w-[560px] tracking-[-0.48px] lg:leading-[1.19] font-[400]">
            Join Us in Shaping the Future
          </h1>
          <p className="text-[#666] text-[20px] font-[500] leading-[1.5] font-lato">
            Be a Part of a Team That Drives Innovation and Empowers Visionaries.
            Explore Opportunities to Make an Impact with Adino.
          </p>
          <div className="mt-4 flex justify-center lg:justify-start">
            <Button
              text="See open positions"
              styles="bg-white text-[#166636]"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <FadingCarousel />
        </div>
      </div>

      <div className="bg-[#f4f4f5] w-full p-6 lg:p-12 mt-8 flex flex-wrap justify-between items-center">
        {[
          { title: "Global Team Member", value: "500+" },
          { title: "Employee Satisfaction Rate", value: "95%" },
          { title: "Annual Growth Rate", value: "40%" },
          { title: "Leadership Promoted", value: "75%" },
        ].map((stat, index) => (
          <div key={index} className="border-l-2 pl-4 space-y-6">
            <p className="text-[#666] font-lato text-[18px] leading-[1.67]">{stat.title}</p>
            <h1 className="text-[#166636] font-sequel text-[40px] leading-[40px] lg:text-[56px] lg:leading-[1.14] tracking-[-0.56px]">
              {stat.value}
            </h1>
          </div>
        ))}
      </div>
      {/* </ScrollAnimation> */}
      
      <div className="px-4 lg:px-12 py-8">
      <ScrollAnimation animateIn="fadeInUp" animateOnce={false}>
        <div className="flex flex-col lg:flex-row justify-between lg:items-end py-8">
          <div className="flex flex-col">
            <p className="text-[14px] text-[#181818] font-lato font-medium uppercase">
              Key Benefit
            </p>
            <h1 className="text-[48px] max-w-[541.1px] font-sequel leading-[1.25] tracking-[-0.48px] text-[#08090a]">
              Why Choose Adino? Here&apos;s What We Offer
            </h1>
          </div>
          <p className="text-[18px] text-[#666] leading-[1.4] font-lato max-w-[366px] mt-4 lg:mt-0">
            Discover the perks and benefits that make Adino a great place to
            work and grow your career.
          </p>
        </div>
        </ScrollAnimation> 
        <ScrollAnimation animateIn="fadeInUp" animateOnce={false}>    
        <div className="bg-[#f6f6f6] p-6 lg:p-8 flex flex-col gap-16 rounded-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex justify-between flex-col gap-6">
              <h2 className="text-[48px] font-sequel font-medium leading-[1.2] tracking-[-0.96px] text-[#166636]">01</h2>
              <div className="space-y-4 max-w-[400px]">
                <h2 className="text-[40px] font-normal text-[#181818] font-sequel leading-[1.2] tracking-[-0.48px]">
                  Competitive Compensation
                </h2>
                <p className="text-[16px] text-[#666] font-lato leading-[1.2] tracking-[0.16px]">
                  We believe in rewarding hard work and dedication. Our
                  compensation packages are designed to be competitive and
                  reflective of your contributions to the company.
                </p>
              </div>
            </div>
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
              <Image
                src="/images/item1.png"
                alt="career"
                width={200}
                height={200}
                className="h-[280px] w-[270px] object-cover rounded-md"
              />
              <Image
                src="/images/item2.png"
                alt="career"
                width={200}
                height={200}
                className="h-[360px] w-[270px] object-cover rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col gap-6">
              <h2 className="text-[48px] font-sequel font-medium leading-[1.2] tracking-[-0.96px] text-[#166636]">02</h2>
              <div className="space-y-4 max-w-[400px]">
                <h2 className="text-[40px] font-normal text-[#181818] font-sequel leading-[1.2] tracking-[-0.48px]">
                  Comprehensive Health Coverage
                </h2>
                <p className="text-[16px] text-[#666] font-lato leading-[1.2] tracking-[0.16px]">
                  Your health and well-being are our priority. We offer
                  comprehensive health insurance plans, including medical,
                  dental, and vision coverage, to ensure you and your family are
                  well taken care of.
                </p>
              </div>
            </div> 
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
              <Image
                src="/images/item3.png"
                alt="career"
                width={200}
                height={200}
                className="h-[360px] w-[270px] object-cover rounded-md"
              />
              <Image
                src="/images/item4.png"
                alt="career"
                width={200}
                height={200}
                className="h-[270px] w-[270px] object-cover rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-[48px] font-sequel font-medium leading-[1.2] tracking-[-0.96px] text-[#166636]">03</h2>
              <div className="space-y-4 max-w-[400px]">
                <h2 className="text-[40px] font-normal text-[#181818] font-sequel leading-[1.2] tracking-[-0.48px]">
                  Flexible Work Environment
                </h2>
                <p className="text-[16px] text-[#666] font-lato leading-[1.2] tracking-[0.16px]">
                  Your health and well-being are our priority. We offer
                  comprehensive health insurance plans, including medical,
                  dental, and vision coverage, to ensure you and your family are
                  well taken care of.
                </p>
              </div>
            </div>
            <div className="flex w-full lg:w-1/2 justify-center lg:justify-end">
              <Image
                src="/images/item5.png"
                alt="career"
                width={201}
                height={200}
                className="h-[350px] w-full lg:w-[502px] object-cover rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col gap-6">
              <h2 className="text-[48px] font-sequel font-medium leading-[1.2] tracking-[-0.96px] text-[#166636]">04</h2>
              <div className="space-y-4 max-w-[400px]">
                <h2 className="text-[40px] font-normal text-[#181818] font-sequel leading-[1.2] tracking-[-0.48px]">
                  Professional Development
                </h2>
                <p className="text-[16px] text-[#666] font-lato leading-[1.2] tracking-[0.16px]">
                  We are committed to your growth. Take advantage of our
                  professional development programs, including workshops,
                  courses, and mentorship opportunities, to advance your skills
                  and career.
                </p>
              </div>
            </div>
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
              <Image
                src="/images/item6.png"
                alt="career"
                width={200}
                height={200}
                className="h-[270px] w-[270px] object-cover rounded-md"
              />
              <Image
                src="/images/item7.png"
                alt="career"
                width={200}
                height={200}
                className="h-[360px] w-[270px] object-cover rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-[48px] font-sequel font-medium leading-[1.2] tracking-[-0.96px] text-[#166636]">05</h2>
              <div className="space-y-4 max-w-[400px]">
                <h2 className="text-[40px] font-normal text-[#181818] font-sequel leading-[1.2] tracking-[-0.48px]">
                  Generous Paid Time Off
                </h2>
                <p className="text-[16px] text-[#666] font-lato leading-[1.2] tracking-[0.16px]">
                  We encourage our team to recharge and relax. Enjoy generous
                  paid time off, including vacation days, holidays, and personal
                  leave, to ensure you have the time you need for rest and
                  rejuvenation.
                </p>
              </div>
            </div>
            <div className="flex w-full lg:w-1/2 justify-center lg:justify-end">
              <Image
                src="/images/item8.png"
                alt="career"
                width={200}
                height={200}
                className="h-[365px] w-full lg:w-[502px] object-cover rounded-md"
              />
            </div>
          </div>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce={false}> 
        <div className="flex flex-col gap-8 pt-12">
          <p className="text-[14px] font-lato font-[500] text-[#666]">OPEN POSITIONS</p>
          <h2 className="text-[40px] font-normal text-[#181818] font-sequel leading-[1.2] tracking-[-0.48px]">
            Shape the Future with Us
          </h2>
          <div className="flex flex-col gap-8">
            {careerData.map((data, idx) => (
              <div key={idx}>
                <h2 className="text-[36px] font-normal font-sequel text-[#666] leading-[1.31] tracking-[-0.48px] pb-4">{data.name}</h2>
                {data.items.map((d, id) => (
                  <div
                    key={id}
                    className="flex border-t-[1px] border-gray-300 py-8 w-full gap-8 justify-between items-center"
                  >
                    <h4 className="font-sequel text-[24px] leading-[1.25] text-[#181818] max-w-[207px]">{d.title}</h4>
                    <span className="text-[14px] bg-[#f0fdf4] text-[#166636] font-sequel p-2 font-[500] leading-[1.4] rounded-full">
                      {d.time}
                    </span>
                    <p className="text-[18px] font-lato text-[#666] leading-[1.67] max-w-[386px] text-left">{d.narration}</p>
                    <p className="text-[18px] font-lato leading-[1.67] text-[#181818]">{d.location}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        </ScrollAnimation>
      </div>
     
    </section> 
  );
};

export default Career;
