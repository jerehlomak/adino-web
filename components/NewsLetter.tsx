import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaPhone } from "react-icons/fa";

import InputField from "./InputField";

const NewsLetter = () => {
  return (
    <div className="flex gap-8 w-full flex-col lg:flex-row">
      <form className="w-full lg:w-1/2 bg-white rounded-lg p-8 flex flex-col gap-4">
        <h2 className="text-[25px] font-semibold">
          Start growing your wealth today!
        </h2>
        <InputField placeholder="Full name" />
        <InputField placeholder="Email address" />
        <InputField placeholder="Phone" />
        <InputField placeholder="Subject" />
        <InputField placeholder="Message" isTextArea />
        <button className="bg-[#166636] text-white rounded-full text-sm p-4">
          Submit
        </button>
      </form>
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div>
          <span className="text-xs bg-[#fff] py-2 px-4 rounded-full font-semibold">
            CONTACT US
          </span>
        </div>
        <h1 className="text-[25px] lg:text-[40px] mt-4 font-semibold pb-4 leading-[2rem]">
          Let&apos;s Talk
        </h1>
        <p className="max-w-[420px]">
          Reach out for inquiries, collaborations, or just to say hello. We&apos;re
          eager to connect!
        </p>
        <div className="mt-4 space-y-4">
          <div className="flex items-center gap-4">
            <span className="bg-white rounded-full p-3">
              <FaInstagram className="text-[#166636] " size={20} />
            </span>
            <p className="font-[500]">Instagram</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-white rounded-full p-3">
              <FaTwitter className="text-[#166636] " size={20} />
            </span>
            <p className="font-[500]">Twitter</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-white rounded-full p-3">
              <FaFacebook className="text-[#166636] " size={20} />
            </span>
            <p className="font-[500]">Facebook</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-white rounded-full p-3">
              <FaPhone className="text-[#166636] " size={20} />
            </span>
            <p className="font-[500]">+234 906 376 6957</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
