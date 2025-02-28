import React from "react";
import { Button, NewsLetter, Testimonial } from "@/components";
import Image from "next/image";
import { clientData, marketData } from "@/constants";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Market = () => {
  return (
    <section className="py-16 flex flex-col gap-16">
      <div className="px-4 lg:px-12 flex w-full flex-col lg:flex-row lg:justify-center gap-16">
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4">
          <p className="uppercase h-[27px] self-stretch flex-grow-0 font-lato text-[14px] font-medium text-[#181818] text-left">Simplify. Grow. Succeed.</p>
          <h1 className="text-[40px] leading-[46px] font-sequel lg:text-[64px] lg:leading-[1.19] tracking-[-0.48px] text-[#181818] text-left">
            Adino <br /> Global Market
          </h1>
          <p className="w-ful lg:w-[574px] font-lato text-[20px] font-medium leading-[1.5] text-[#666666] text-left">
            Unlock global financial opportunities with Adino Global Markets. We
            provide comprehensive market analysis, trading strategies, and
            investment solutions to help you navigate the complexities of the
            global market.
          </p>
          <div className="mt-4">
            <Button
              text="Speak to an Advisor"
              styles="text-[#166636] bg-white"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="flex flex-col gap-2 text-[#166636]">
              <h4 className="h-[48px] font-sequel text-[56px] font-normal leading-[1.14] tracking-[-0.56px] text-[#166636] text-left">2x</h4>
              <small className="h-[21px] font-lato text-[14px] font-normal leading-[1.43] tracking-[0.16px] text-[#166636] text-left">Clarity in 30 Days</small>
            </span>
            <span className="flex flex-col gap-2 text-[#166636]">
              <h4 className="h-[48px] font-sequel text-[56px] font-normal leading-[1.14] tracking-[-0.56px] text-[#166636] text-left">50%</h4>
              <small className="h-[21px] font-lato text-[14px] font-normal leading-[1.43] tracking-[0.16px] text-[#166636] text-left">Less Bookkeeping</small>
            </span>
            <span className="flex flex-col gap-2 text-[#166636]">
              <h4 className="h-[48px] font-sequel text-[56px] font-normal leading-[1.14] tracking-[-0.56px] text-[#166636] text-left">20%</h4>
              <small className="h-[21px] font-lato text-[14px] font-normal leading-[1.43] tracking-[0.16px] text-[#166636] text-left">More Cash Flow</small>
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-[470px] flex flex-col">
          <Image
            src="/images/market1.png"
            alt="market bg"
            width={400}
            height={400}
            className="w-[632.8px] flex flex-col justify-start items-stretch p-0 rounded-[10px]"
          />
        </div>
      </div>

      <div className="px-4 lg:px-12 py-16 lg:mt-24 flex w-full flex-col lg:flex-row gap-8 lg:gap-20">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div>
            <span className="text-[14px] bg-[#e4edf4] py-2 px-4 font-lato rounded-full font-semibold">
              ABOUT US
            </span>
          </div>
          <p className="w-full lg:w-[577px] lg:h-[120px] font-sequel text-[38px] lg:text-[48px] leading-[1.1] font-normal lg:leading-[1.25] tracking-[-0.48px] text-black text-left">
            Navigate Global Markets with Confidence
          </p>

          <p className="font-lato text-[18px] font-medium leading-[1.5] text-[#666666] text-left">
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
            className="w-full h-[620px] object-cover rounded-md"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <Image
            src="/images/market2.png"
            alt="market bg"
            width={400}
            height={400}
            className="w-full h-[620px] object-cover rounded-md"
          />
          <p className="font-lato text-[18px] font-medium leading-[1.5] text-[#666666] text-left">
            Unlock global financial opportunities with Adino Global Markets. We
            provide comprehensive market analysis, trading strategies, and
            investment solutions to help you navigate the complexities of the
            global market.
          </p>
        </div>
      </div>

      <div className="bg-[#edf3f1] px-4 lg:px-12 py-12 flex flex-col">
        <div className="space-y-4 border-b-[1px] border-gray-300">
          <span className="text-[14px] bg-[#fff] py-2 px-4 rounded-full font-lato font-semibold">
            WHAT WE DO
          </span>
          <h1 className="text-[48px] font-sequel leading-[1.25] tracking-[-0.48px] font-normal pb-4">Our Services</h1>
        </div>

        {marketData.map((item) => (
          <div
            key={item.header}
            className="flex flex-col lg:flex-row gap-4 justify-between border-b-[1px] py-4 border-gray-300"
          >
            <div className="flex flex-col gap-2">
              <h5 className="text-[24px] font-sequel font-bold leading-[1.67] text-[#000] text-left">{item.header}</h5>
              <p className="font-lato text-[18px] font-medium leading-[1.5] text-[#666666] text-left max-w-[600px]">{item.desc}</p>
            </div>
            <button className="font-bold font-lato text-[14px] flex items-center gap-2">
              Learn more <MdOutlineArrowRightAlt size={24} />
            </button>
          </div>
        ))}
      </div>

      <div className="px-4 lg:px-12 py-12 flex flex-col">
        <div className="space-y-4">
          <span className="text-[14px] font-lato bg-[#edf3f1] py-2 px-4 rounded-full font-semibold">
            TESTIMONIALS
          </span>
          <h1 className="text-[48px] tracking-[-0.48px] font-sequel pb-4">Clients Review</h1>
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
