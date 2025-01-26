import React from "react";
import { Button, InputField, Accordion } from "@/components";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { accordionData } from "@/constants";
import { PiWarningCircleLight } from "react-icons/pi";

const Contact = () => {
  return (
    <section className="px-4 lg:px-12 flex flex-col items-center gap-8 py-12">
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-xs rounded-full p-2 bg-[#f0fdf4] text-[#166636]">
          Contact
        </p>
        <h1 className="text-[40px] text-center leading-[3rem] max-w-[500px] ">
          Start your journey with Adino today
        </h1>
        <Button text="Explore Services" styles="bg-white text-[#166636]" />
      </div>
      <div className=" mt-6 flex flex-col lg:flex-row gap-8 justify-center">
        <div className="space-y-4 flex justify-between flex-col">
          <h1 className="text-[30px]">
          For inquiries, collaborations, or to learn more about our services
          </h1> 
          <div className="space-y-4">
            <span className="flex items-center gap-4">
              <span className="p-2 rounded-md bg-[#166636] text-white">
                <FaPhone size={20} color="white" className="" />
              </span>
              <p className="text-sm">+234 906 376 6957</p>
            </span>
            <span className="flex items-center gap-4">
              <span className="p-2 rounded-md bg-[#166636] text-white">
                <MdOutlineMail size={20} color="white" className="" />
              </span>
              <p className="text-sm">info@adinocapital.com</p>
            </span>
            <span className="flex items-center gap-4">
              <span className="p-2 rounded-md bg-[#166636] text-white">
                <CiLocationOn size={20} color="white" className="" />
              </span>
              <p className="text-sm">10A, Alexander Road Ikoyi, Lagos</p>
            </span>
          </div>
          <div className="flex h-full flex-col justify-center items-center w-full p-4 rounded-sm bg-[#e0e0e0]">
            <PiWarningCircleLight className="font-bold" size={32} /> 
            <p className="text-xs">
              This site can&apos;t load Google Maps correctly
            </p>
            <p className="text-xs mt-6">Do you own this website?</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-[1px] border-[#e5e5e5] p-8 rounded-lg">
          <div className="flex flex-col lg:flex-row items center gap-4">
            <InputField
              inputType="text"
              labelName="Name"
              placeholder="Jane Smith"
            />
            <InputField
              inputType="text"
              labelName="Phone number"
              placeholder="(123) 456 789"
            />
          </div>
          <div className="flex flex-col lg:flex-row items center gap-4">
            <InputField
              inputType="email"
              labelName="Email address"
              placeholder="test@gmail.com"
            />
            <InputField
              inputType="date"
              labelName="Select date*"
              placeholder="mm/dd/yyyy"
            />
          </div>
          <div>
            <InputField
              inputType="textarea"
              labelName="Message"
              placeholder="Write your idea"
              isTextArea
            />
          </div>
          <button className="bg-[#166636] rounded-full px-4 py-3 text-white">
            Submit
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-8">
        <p className="text-center text-sm">FAQ</p>
        <h1 className="text-3xl font-medium mb-2 text-center">Frequently Asked Questions</h1>
        <div className="w-full max-w-[40rem]">
          {accordionData.map((item, index) => (
            <Accordion 
              key={index} 
              index={index + 1} 
              title={item.title} 
              content={item.content} 
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
