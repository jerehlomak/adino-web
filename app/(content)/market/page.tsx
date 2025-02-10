import React from "react";
import { Button, NewsLetter, Testimonial } from "@/components";
import Image from "next/image";
import { clientData, marketData } from "@/constants";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Market = () => {
  return (
    <section className="py-16 flex flex-col gap-16">
      <div className="px-4 lg:px-12 flex w-full flex-col lg:flex-row lg:justify-between gap-16">
        <div className="w-full lg:w-1/2 flex flex-col justify-between gap-4">
          <p className="uppercase text-sm">Simplify. Grow. Succeed.</p>
          <h1 className="text-[40px] font-semibold">
            Adino <br /> Global Market
          </h1>
          <p>
            Unlock global financial opportunities with Adino Global Markets. We
            provide comprehensive market analysis, trading strategies, and
            investment solutions to help you navigate the complexities of the
            global market.
          </p>
          <div>
            <Button
              text="Speak to an Advisor"
              styles="text-[#166636] bg-white"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="flex flex-col gap-2 text-[#166636]">
              <h4 className="text-[35px] font-semibold">2x</h4>
              <small>Clarity in 30 Days</small>
            </span>
            <span className="flex flex-col gap-2 text-[#166636]">
              <h4 className="text-[35px] font-semibold">50%</h4>
              <small>Less Bookkeeping</small>
            </span>
            <span className="flex flex-col gap-2 text-[#166636]">
              <h4 className="text-[35px] font-semibold">20%</h4>
              <small>More Cash Flow</small>
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-[470px] flex flex-col">
          <Image
            src="/images/market1.png"
            alt="market bg"
            width={400}
            height={400}
            className="lg:w-[90%] h-full object-cover place-self-end"
          />
        </div>
      </div>

      <div className="px-4 lg:px-12 py-16 flex w-full flex-col lg:flex-row gap-8 lg:gap-20">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div>
            <span className="text-xs bg-[#e4edf4] py-2 px-4 rounded-full font-semibold">
              ABOUT US
            </span>
          </div>
          <h1 className="text-[25px]">
            Navigate Global Markets with Confidence
          </h1>
          <p>
            Unlock global financial opportunities with Adino Global Markets. We
            provide comprehensive market analysis, trading strategies, and
            investment solutions to help you navigate the complexities of the
            global market.
          </p>
          <Image
            src="/images/market3.png"
            alt="market bg"
            width={400}
            height={400}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <Image
            src="/images/market2.png"
            alt="market bg"
            width={400}
            height={400}
            className="w-full h-full object-cover rounded-md"
          />
          <p>
            Unlock global financial opportunities with Adino Global Markets. We
            provide comprehensive market analysis, trading strategies, and
            investment solutions to help you navigate the complexities of the
            global market.
          </p>
        </div>
      </div>

      <div className="bg-[#edf3f1] px-4 lg:px-12 py-12 flex flex-col">
        <div className="space-y-4 border-b-[1px] border-gray-300">
          <span className="text-xs bg-[#fff] py-2 px-4 rounded-full font-semibold">
            ABOUT US
          </span>
          <h1 className="text-[40px] font-semibold pb-4">Our Services</h1>
        </div>

        {marketData.map((item) => (
          <div
            key={item.header}
            className="flex justify-between border-b-[1px] py-4 border-gray-300"
          >
            <div className="flex flex-col gap-2">
              <h5 className="text-[18px] font-bold">{item.header}</h5>
              <p className="text-sm max-w-[600px]">{item.desc}</p>
            </div>
            <button className="font-bold text-xs flex items-center gap-2">
              Learn more <MdOutlineArrowRightAlt size={24} />
            </button>
          </div>
        ))}
      </div>

      <div className="px-4 lg:px-12 py-12 flex flex-col">
        <div className="space-y-4">
          <span className="text-xs bg-[#edf3f1] py-2 px-4 rounded-full font-semibold">
            TESTIMONIALS
          </span>
          <h1 className="text-[40px] font-semibold pb-4">Clients Review</h1>
        </div>
       <Testimonial />
      </div>

      <div className="bg-[#f7f7f7] py-16">
        <div className="px-4 lg:px-12">
          <NewsLetter />
        </div>
      </div>
    </section>
  );
};

export default Market;
