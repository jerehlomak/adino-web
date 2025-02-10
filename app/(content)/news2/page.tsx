import React from "react";
import Image from "next/image";
import { InputField, NewsCard, SubFooter } from "@/components";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { newData, newsData } from "@/constants";

const NewsDetails = ({ params }: { params: any }) => {
    console.log(params)
  return (
    <section>
      <div className="px-4 lg:px-12 w-full bg-[#f4f4f5] text-[#181818] flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-8 lg:py-16">
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div>
            <span className="border-[1px] px-4 py-1.5 border-[#cdf8d4] rounded-full bg-[#f0fdf4]">
                Strategic Partnerships
            </span>                          
            </div>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl">
            Cabin agrees to make a significant strategic investment in Grant
            Thornton
          </h1>
          <span className="flex items-center gap-2">
            <p>January 30, 2024</p>
            <div className="rounded-full h-1 w-1 bg-[#181818]" />
            <p>5 Min Read</p>
          </span>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/news3.png"
            alt="news"
            width={400}
            height={400}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
      <div className="px-4 lg:px-12 py-8 lg:py-16 w-full text-[#53535c] flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="w-full lg:w-1/3">
          <div className="border-[1px] rounded-lg border-[#e5e5e5] p-4">
            <div className="flex flex-col gap-4 ">
              <h4 className="text-[20px] font-semibold">
                Subscribe to newsletter
              </h4>
              <p>
                Subscribe to receive the latest blog posts to your inbox every
                week.
              </p>
              <InputField placeholder="Enter your Email" />
              <button className="px-4 py-2.5 bg-[#166636] text-white rounded-full">
                Submit
              </button>
              <p className="text-sm">
                By subscribing you agree to with our Privacy Policy.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <p className="font-semibold text-[14px]">SHARE THIS POST</p>
              <div className="flex items-center gap-4">
                <span className="bg-[#f4f4f5] p-3 rounded-full">
                  <FaFacebook size={20} />
                </span>
                <span className="bg-[#f4f4f5] p-3 rounded-full">
                  <FaFacebook size={20} />
                </span>
                <span className="bg-[#f4f4f5] p-3 rounded-full">
                  <FaXTwitter size={20} />
                </span>
                <span className="bg-[#f4f4f5] p-3 rounded-full">
                  <FaLinkedin size={20} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3 flex flex-col gap-8">
          {newData.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h2 className="text-2xl lg:text-3xl font-semibold">
                {item.topic}
              </h2>
              {item.sub_topic !== null && (
                <div className="flex gap-4 items-center border-l-[1px] border-[#53535c] p-4">
                  <p className="text-[18px] font-[500]">{item.sub_topic}</p>
                </div>
              )}
              <p className="text-sm">{item.details}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 lg:px-12 py-8 lg:py-16 w-full flex flex-col gap-4">
        <h1 className="text-3xl font-semibold">Related post</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
          {newsData.slice(0,4).map((news, index) => (
            <NewsCard
              id={index}
              description={news.description}
              category={news.category}
              imageSrc={news.imageSrc}
              title={news.title}
            />
          ))}
        </div>
      </div>
      <SubFooter />
    </section>
  );
};

export default NewsDetails;
