import React from "react";
import { IoIosArrowBack } from "react-icons/io";

import { Button } from "@/components";
import { requirementData } from "@/constants";

const Susidiaries = () => {
  return (
    <section className="py-16 px-4 lg:px-12">
      <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-8">
        <div className="w-full lg:w-2/5  flex flex-col gap-4 border-r-2">
          <p className="flex items-center gap-2 text-xs pb-8">
            <IoIosArrowBack size={16} /> Back
          </p>
          <div className="flex">
            <p className="text-xs p-2 bg-[#f0fdf4] text-[#166636] rounded-md">
              Full-Time
            </p>
          </div>
          <div className="max-w-[400px]">
            <h1 className="text-[40px]">Adino Capital Partner</h1>
            <p>
              Craft compelling narratives that showcase Ventsurely’s vision and
              portfolio.
            </p>
          </div>
          <span className="flex flex-col gap-2">
            <p className="font-semibold">LOCATION:</p>
            <p className="text-sm">Lagos, Nigeria</p>
          </span>
          <span>
            <p className="font-semibold">DEPARTMENT:</p>
            <p className="text-sm">Investment</p>
          </span>
          <div>
            <Button text="Apply now" styles="bg-white text-[#166636]" />
          </div>
        </div>
        <div className="h-full w-[2px] bg-[#f0fdf4]" />
        <div className="w-full lg:w-3/5 flex flex-col gap-6 max-w-[600px]">
          <div className="space-y-2">
            <h4 className="font-bold text-[20px]">Job Summary</h4>
            <p className="text-sm">
              We are looking for a passionate and creative Capital Partner to
              lead our marketing efforts at Adino. The ideal candidate will
              develop and execute multi-channel marketing campaigns to drive
              brand awareness, engage target audiences, and support our
              portfolio companies. This is an exciting opportunity to work
              within a growing venture capital firm and shape the way we
              communicate with the world.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {requirementData.map((item, idx) => (
              <div className="space-y-2" key={idx}>
                <h4 className="font-bold text-[20px]">{item.name}</h4>
                {item.text && <p>{item.text}</p>}
                <ul className="flex flex-col gap-3">
                  {item.qualifications.map((i, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-[#166636] border-l-2 border-[#166636] p-2 bg-[#f0fdf4]"
                    >
                      <div className="h-[6px] w-[6px] rounded-full bg-[#166636]" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Susidiaries;
