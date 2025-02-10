import { Clients, NewsLetter } from "@/components";
import Image from "next/image";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Capital = () => {
  return (
    <section className="py-16 flex flex-col gap-16">
      <div className="px-4 lg:px-12 w-full flex flex-col lg:flex-row gap-12 justify-between">
        <div className="w-full lg:w-1/2 bg-[#f0fdf4] text-[#166636] p-8 rounded-[32px] flex flex-col justify-between gap-4">
          <h1 className="text-2xl lg:text-5xl font-semibold">
            Adino <br /> Capital
          </h1>
          <p>
            Unlock global financial opportunities with Adino Capital. We provide
            comprehensive market analysis, trading strategies, and investment
            solutions to help you navigate the complexities of the global
            market.
          </p>
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
          <button className="bg-[#166636] text-white text-sm rounded-full px-4 py-2.5">
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
          <span className="text-xs border-[1px] border-[#166636] bg-transparent py-2 px-4 rounded-full font-semibold text-[#166636]">
            ABOUT US
          </span>
        </div>
        <h2 className="text-[#166636] text-center font-semibold text-4xl">
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
        <p className="max-w-[600px] text-[18px] text-[#666666] text-center">
          Unlock global financial opportunities with Adino Global Markets. We
          provide comprehensive market analysis, trading strategies, and
          investment solutions to help you navigate the complexities of the
          global market.
        </p>
      </div>
      <div className="px-4 lg:px-12 py-4 lg:py-8">
        <div className="w-full flex flex-col lg:flex-row gap-8 bg-[#edf3f1] p-8 rounded-md">
          <div className="w-full flex flex-col justify-between gap-4 lg:w-1/2">
            <div>
              <span className="bg-white rounded-full font-semibold py-2 px-4 text-xs">
                WHAT WE DO
              </span>
            </div>
            <h1 className="text-4xl font-semibold">Our Solutions</h1>
            <div className="flex gap-4 py-4">
              <h4 className="text-5xl font-semibold text-[#666666]">01</h4>
              <span className="flex flex-col gap-2">
                <p className="text-[20px] font-semibold">
                  Personal Finance Strategies
                </p>
                <p className="text-sm max-w-[400px]">
                  Effective strategies for budgeting, saving & investing that
                  empower individuals to take control of their financial
                  futures.
                </p>
              </span>
            </div>
            <div className="flex gap-4 py-4">
              <h4 className="text-5xl font-semibold text-[#666666]">02</h4>
              <span className="flex flex-col gap-2">
                <p className="text-[20px] font-semibold">
                  Business Finance Management
                </p>
                <p className="text-sm max-w-[400px]">
                  A comprehensive financial management solutions tailored for
                  businesses, focusing on cash flow optimization.
                </p>
              </span>
            </div>
            <button className="text-sm flex gap-2 items-center">
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
