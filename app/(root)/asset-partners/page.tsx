import React from "react";
import Image from "next/image";
import { Clients, Header, NewsLetter } from "@/components";

const Partners = () => {
  return (
    <main>
      <section
        className="relative flex flex-col lg:justify-between py-8 px-6 lg:px-12"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(16,71,43,0.9), rgba(64,64,50,0.7), rgba(0,0,0,0.8)), url('/images/background.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div>
          <Header />
        </div>
        <div className="absolute flex flex-col items-start gap-8 text-[#fff] top-[50%] translate-y-[-50%]">
          {/* <p className="text-sm">ADINO</p> */}
          <h1 className="text-[64px] leading-[1.19] tracking-[-0.48px] font-sequel">Adino Partners</h1>
          <div className="flex gap-4">
            {/* <div className="h-full w-[1px] bg-[#fff]" /> */}
            <p className="max-w-[702px] text-left font-lato text-[20px] leading-[1.5]">
              Unlock global financial opportunities with Adino Asset Management.
              We provide comprehensive market analysis, trading strategies, and
              investment solutions to help you navigate the complexities of the
              global market.
            </p>
          </div>
          <div>
            <button className="px-4 py-2.5 rounded-full font-lato text-[16px] bg-[#fff] text-[#166636]">
              Speak to an Advisor
            </button>
          </div>
        </div>
      </section>
      {/* About section */}
      <div className="px-4 lg:px-12 py-16 flex flex-col gap-8">
        <div className="flex items-center gap-8 lg:gap-16">
          <p className="text-[14px] text-[#181818] font-lato font-medium whitespace-nowrap">ABOUT US</p>
          <div className="w-full bg-[#e7e4e4] h-[3px]" />
        </div>
        <h1 className="text-[48px] leading-[1.25] tracking-[-0.48px] text-[#181818] font-sequel max-w-[579px]">
          Collaborate for Financial Success
        </h1>
        <div className="w-full flex flex-col lg:flex-row justify-between gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 gap-8 flex flex-col">
            <Image
              src="/images/partner1.png"
              alt="partner"
              width={400}
              height={400}
              className="object-cover w-full h-[640px]"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-8 justify-between">
            <div className="flex flex-col gap-4">
              <p className="font-lato px-4 py-2 text-[16px] leading-[1.65] text-[#666]">
                At Adino Partners, we believe in the power of collaboration to
                drive financial success. Our team of seasoned experts works
                closely with you to craft tailored financial strategies that
                align with your unique goals.
              </p>
              <p className="font-lato px-4 py-2 text-[16px] leading-[1.65] text-[#666]">
                Whether you're looking to expand your business, optimize your
                financial operations, or navigate complex mergers and
                acquisitions, Adino Partners is your trusted advisor every step
                of the way.
              </p>
              <p className="font-lato px-4 py-2 text-[16px] leading-[1.65] text-[#666]">
                At Adino Partners, we believe in the power of collaboration to
                drive financial success. Our team of seasoned experts works
                closely with you to craft tailored financial strategies that
                align with your unique goals.
              </p>
              <p className="font-lato px-4 py-2 text-[16px] leading-[1.65] text-[#666]">
                Whether you're looking to expand your business, optimize your
                financial operations, or navigate complex mergers and
                acquisitions, Adino Partners is your trusted advisor every step
                of the way.
              </p>
            </div>
            <div className="bg-[#166636] text-white p-8 w-full flex flex-wrap gap-8 items-center justify-between">
              <span className="flex flex-col gap-2">
                <h4 className="text-[56px] font-sequel leading-[1.14] tracking-[-0.56px] ">8+</h4>
                <p className="text-[18px] text-[#eaf3f3] leading-[1.67] font-lato">Years of Experience</p>
              </span>
              <span className="flex flex-col gap-2">
                <h4 className="text-[56px] font-sequel leading-[1.14] tracking-[-0.56px] ">30+</h4>
                <p className="text-[18px] text-[#eaf3f3] leading-[1.67] font-lato">Team Members</p>
              </span>
              <span className="flex flex-col gap-2">
                <h4 className="text-[56px] font-sequel leading-[1.14] tracking-[-0.56px] ">1k</h4>
                <p className="text-[18px] text-[#eaf3f3] leading-[1.67] font-lato">Project Completed</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Working Process */}
      <div className="w-full px-4 lg:px-12 py-8 lg:py-16 flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <h1 className="text-[48px] leading-[1.25] tracking-[-0.48px] text-[#181818] font-sequel">
            Our Working Process
          </h1>
          <p className="max-w-[600px] text-left font-lato text-[18px] leading-[1.67] text-[#666]">
            We begin by understanding your needs, style preferences, and the
            vision for your space. During this initial consultation, we gather
            details.
          </p>
          <div className="space-y-8 mt-4">
            <div className="flex gap-4">
              <span className="bg-[#166636] flex items-center text-[24px] font-sequel leading-[2.67] tracking-[-0.56px] justify-center h-[42px] w-[42px] rounded-full p-4 text-white">
                1
              </span>
              <div className="flex flex-col gap-2">
                <h5 className="text-left font-sequel text-[24px] leading-[1.67] text-[#181818]">
                  Concept Development
                </h5>
                <p className="text-left font-lato text-[18px] leading-[1.67] text-[#666]">
                  Our journey begins with a detailed consultation to understand
                  your vision, lifestyle preferences.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="bg-[#166636] flex items-center text-[24px] font-sequel leading-[2.67] tracking-[-0.56px] justify-center h-[42px] w-[42px] rounded-full p-4 text-white">
                2
              </span>
              <div className="flex flex-col gap-2">
                <h5 className="text-left font-sequel text-[24px] leading-[1.67] text-[#181818]">
                  Design Presentation
                </h5>
                <p className="text-left font-lato text-[18px] leading-[1.67] text-[#666]">
                  With the design plan in place, we guide through the process of
                  selecting perfect materials.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="bg-[#166636] flex items-center text-[24px] font-sequel leading-[2.67] tracking-[-0.56px] justify-center h-[42px] w-[42px] rounded-full p-4 text-white">
                3
              </span>
              <div className="flex flex-col gap-2">
                <h5 className="text-left font-sequel text-[24px] leading-[1.67] text-[#181818]">Timeline Planning</h5>
                <p className="text-left font-lato text-[18px] leading-[1.67] text-[#666]">
                  At this stage, we finalize the budget and timeline, providing
                  a clear roadmap for your project.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 h-[650px]">
          <Image
            src="/images/partner2.png"
            alt="partner"
            width={400}
            height={400}
            className="object-cover h-full w-full"
          />
          <div className="absolute bottom-6 left-6 flex flex-col gap-2 w-[186px] h-[125px] bg-white p-[16px] ">
              <span className="text-[56px] leading-[1.14] tracking-[-0.56px] text-[#166636] font-sequel">11+</span>
              <span className="font-lato text-[18px] text-[#666] leading-[1.67] whitespace-nowrap">Years of experience</span>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Clients />
      </div>
      <div className="bg-[#f7f7f7] px-4 py-16 lg:px-12">
        <NewsLetter />
      </div>
    </main>
  );
};

export default Partners;
