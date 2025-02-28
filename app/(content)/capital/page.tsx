import { Clients, NewsLetter } from "@/components";
import Image from "next/image";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Capital = () => {
  return (
    <section className="py-16 flex flex-col gap-16">
      <div className="px-4 lg:px-12 w-full flex flex-col lg:flex-row gap-12 justify-between">
        <div className="w-full lg:w-1/2 bg-[#f0fdf4] text-[#166636] p-8 rounded-[32px] flex flex-col justify-between gap-4">
          <h1 className="font-sequel text-[64px] font-normal leading-[1.19] tracking-[-0.48px] text-[#166636] text-left">
            Adino <br className="hidden lg:block" /> Capital
          </h1>
          <p className="font-lato text-[18px] mb-4">
            Unlock global financial opportunities with Adino Capital. We provide
            comprehensive market analysis, trading strategies, and investment
            solutions to help you navigate the complexities of the global
            market.
          </p>
          <div className="flex items-center justify-between">
            <span className="flex flex-col gap-2 text-[#166636]">
              <h4 className="h-[48px] self-stretch flex-grow-0 font-sequel text-[56px] font-normal leading-[1.14] tracking-[-0.56px] text-[#166636] text-left">2x</h4>
              <small className="h-[21px] font-lato text-[14px] font-normal leading-[1.43] tracking-[0.16px] text-[#166636] text-left">Clarity in 30 Days</small>
            </span>
            <span className="flex flex-col gap-2 text-[#166636]">
              <h4 className="h-[48px] self-stretch flex-grow-0 font-sequel text-[56px] font-normal leading-[1.14] tracking-[-0.56px] text-[#166636] text-left">50%</h4>
              <small className="h-[21px] font-lato text-[14px] font-normal leading-[1.43] tracking-[0.16px] text-[#166636] text-left">Less Bookkeeping</small>
            </span>
            <span className="flex flex-col gap-2 text-[#166636]">
              <h4 className="h-[48px]  font-sequel text-[56px] font-normal leading-[1.14] tracking-[-0.56px] text-[#166636] text-left">20%</h4>
              <small className="h-[21px] font-lato text-[14px] font-normal leading-[1.43] tracking-[0.16px] text-[#166636] text-left">More Cash Flow</small>
            </span>
          </div>
          <button className="bg-[#166636] text-white text-base rounded-full px-4 py-2.5 font-lato">
            Speak to an Advisor
          </button>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/capital-bg.png"
            alt="capital"
            width={400}
            height={400}
            className="object-cover w-full rounded-[32px] lg:h-[550px]"
          />
        </div>
      </div>
      <div className="px-4 lg:px-12 py-4 lg:py-8 w-full flex flex-col gap-8 items-center">
        <div>
          <span className="font-lato border-[1px] border-[#166636] bg-transparent py-2 px-4 rounded-full font-semibold text-[#166636]">
            ABOUT US
          </span>
        </div>
        <h2 className="text-[#166636] text-center text-[48px] font-sequel leading-[1.25] tracking-[-0.48px] font-normal">
          Your Trusted <br />
          Financial Partners
        </h2>
        <div className="w-full flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/capital1.png"
              alt="capital"
              width={400}
              height={400}
              className="object-cover w-full rounded-[32px] h-[400px]"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/capital2.png"
              alt="capital"
              width={400}
              height={400}
              className="object-cover w-full rounded-[32px] h-[400px]"
            />
          </div>
        </div>
        <p className="max-w-[600px] font-lato text-[18px] text-[#666666] text-center">
          Unlock global financial opportunities with Adino Global Markets. We
          provide comprehensive market analysis, trading strategies, and
          investment solutions to help you navigate the complexities of the
          global market.
        </p>
      </div>
      <div className="px-4 lg:px-12 py-4 lg:py-8 h-[693px]">
        <div className="w-full flex flex-col lg:flex-row gap-8 bg-[#edf3f1] p-8 rounded-md">
          <div className="w-full flex flex-col justify-between gap-4 lg:w-1/2">
            <div>
              <span className="bg-white text-[14px] text-[#000] font-medium font-lato rounded-full py-2 px-4">
                WHAT WE DO
              </span>
            </div>
            <h1 className="text-[48px] leading-[1.25] tracking-[-0.48px] font-sequel">Our Solutions</h1>
            <div className="flex gap-4 py-4">
              <h4 className="text-3xl lg:text-[52px] font-lato leading-[1]  text-[rgba(0,0,0,0.45)]">01</h4>
              <span className="flex flex-col gap-2">
                <p className="text-[24px] leading-[1.67] font-sequel">
                  Personal Finance Strategies
                </p>
                <p className="max-w-[400px] font-lato text-[16px] text-[#333] leading-[1.5]">
                  Effective strategies for budgeting, saving & investing that
                  empower individuals to take control of their financial
                  futures.
                </p>
              </span>
            </div>
            <div className="flex gap-4 py-4">
              <h4 className="text-3xl lg:text-[52px] font-lato leading-[1]  text-[rgba(0,0,0,0.45)]">02</h4>
              <span className="flex flex-col gap-2">
                <p className="text-[24px] leading-[1.67] font-sequel">
                  Business Finance Management
                </p>
                <p className="max-w-[400px] font-lato text-[16px] text-[#333] leading-[1.5]">
                  A comprehensive financial management solutions tailored for
                  businesses, focusing on cash flow optimization.
                </p>
              </span>
            </div>
            <button className="text-[14px] font-lato leading-[1.3] flex gap-2 items-center">
              Contact us <MdOutlineArrowRightAlt size={20} />
            </button>
          </div>
          <div className="w-full lg:w-1/2 ">
            <Image
              src="/images/capital3.png"
              alt="capital"
              width={400}
              height={400}
              className="object-cover w-full rounded-md lg:h-[430px]"
            />
          </div>
        </div>
      </div>

      {/* testimonial */}
      <Clients />
      
      <div className="bg-[#f7f7f7] px-4 py-16 lg:px-12">
      <NewsLetter />
      </div>
    </section>
  );
};

export default Capital;
