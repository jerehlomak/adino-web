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
      
      <div className="px-4 lg:px-12 flex flex-col lg:flex-row items-center gap-8 h-full lg:h-[60vh]">
        
        <div className="w-full lg:w-2/5 flex flex-col gap-4 text-center lg:text-left">
          <p className="text-sm text-[#87888a] tracking-wider">CAREERS</p>
          <h1 className="text-[25px] lg:text-[40px] lg:leading-[3rem] font-bold">
            Join Us in Shaping the Future
          </h1>
          <p className="text-[#555]">
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
        <div className="w-full lg:w-3/5">
          {/* Placeholder for future content or images */}
          <FadingCarousel />
        </div>
      </div>

      {/* <ScrollAnimation animateIn="fadeInUp" duration={1} delay={100} animateOnce={true}> */}
      <div className="bg-[#f4f4f5] p-6 lg:p-12 mt-8 flex flex-wrap gap-8 justify-between items-center">
        {[
          { title: "Global Team Member", value: "500+" },
          { title: "Employee Satisfaction Rate", value: "95%" },
          { title: "Annual Growth Rate", value: "40%" },
          { title: "Leadership Promoted", value: "75%" },
        ].map((stat, index) => (
          <div key={index} className="border-l-2 pl-4">
            <p className="text-[#87888a] font-light">{stat.title}</p>
            <h1 className="text-[#166636] font-bold text-[40px]">
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
            <p className="text-sm text-[#87888a] uppercase tracking-wider">
              Key Benefit
            </p>
            <h1 className="text-[24px] lg:text-[30px] font-semibold">
              Why Choose Adino?
            </h1>
            <h1 className="text-[24px] lg:text-[30px] font-semibold">
              Here&apos;s What We Offer
            </h1>
          </div>
          <p className="text-sm text-[#555] max-w-[400px] mt-4 lg:mt-0">
            Discover the perks and benefits that make Adino a great place to
            work and grow your career.
          </p>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce={false}> 
        <div className="bg-[#f6f6f6] p-6 lg:p-8 flex flex-col gap-12 rounded-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-[35px] font-semibold text-[#166636]">01</h2>
              <div className="space-y-4 max-w-[400px]">
                <h2 className="text-[30px] font-semibold">
                  Competitive Compensation
                </h2>
                <p className="text-sm text-[#87888a]">
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
                className="h-[200px] w-[220px] object-cover rounded-md"
              />
              <Image
                src="/images/item2.png"
                alt="career"
                width={200}
                height={200}
                className="h-[260px] w-[200px] object-cover rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-[35px] font-semibold text-[#166636]">02</h2>
              <div className="space-y-4 max-w-[400px]">
                <h2 className="text-[30px] font-semibold">
                  Comprehensive Health Coverage
                </h2>
                <p className="text-sm text-[#87888a]">
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
                className="h-[260px] w-[200px] object-cover rounded-md"
              />
              <Image
                src="/images/item4.png"
                alt="career"
                width={200}
                height={200}
                className="h-[200px] w-[220px] object-cover rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-[35px] font-semibold text-[#166636]">03</h2>
              <div className="space-y-4 max-w-[400px]">
                <h2 className="text-[30px] font-semibold">
                  Flexible Work Environment
                </h2>
                <p className="text-sm text-[#87888a]">
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
                width={200}
                height={200}
                className="h-[240px] w-[70%] object-cover rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-[35px] font-semibold text-[#166636]">04</h2>
              <div className="space-y-4 max-w-[400px]">
                <h2 className="text-[30px] font-semibold">
                  Professional Development
                </h2>
                <p className="text-sm text-[#87888a]">
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
                className="h-[200px] w-[220px] object-cover rounded-md"
              />
              <Image
                src="/images/item7.png"
                alt="career"
                width={200}
                height={200}
                className="h-[260px] w-[200px] object-cover rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="text-[35px] font-semibold text-[#166636]">05</h2>
              <div className="space-y-4 max-w-[400px]">
                <h2 className="text-[30px] font-semibold">
                  Generous Paid Time Off
                </h2>
                <p className="text-sm text-[#87888a]">
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
                className="h-[240px] w-[70%] object-cover rounded-md"
              />
            </div>
          </div>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce={false}> 
        <div className="flex flex-col gap-8 pt-12">
          <p>OPEN POSITIONS</p>
          <h2 className="text-[30px] font-semibold">
            Shape the Future with Us
          </h2>
          <div className="flex flex-col gap-8">
            {careerData.map((data, idx) => (
              <div key={idx}>
                <h2 className="text-[30px] font-semibold pb-4">{data.name}</h2>
                {data.items.map((d, id) => (
                  <div
                    key={id}
                    className="flex border-t-[1px] border-gray-300 py-8 w-full gap-8 justify-between items-center"
                  >
                    <h4 className="font-semibold">{d.title}</h4>
                    <span className="text-sm bg-[#f0fdf4] text-[#166636] p-2 rounded-full">
                      {d.time}
                    </span>
                    <p className="text-sm text-gray-400">{d.narration}</p>
                    <p className="text-sm font-semibold">{d.location}</p>
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
