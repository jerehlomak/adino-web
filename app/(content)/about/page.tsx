import React from "react";
import Image from "next/image";
import { gridData } from "@/constants";
import { Team } from "@/components"

const page = () => {
  return (
    <section className="py-12 flex flex-col gap-8 lg:gap-16">
      <div className="px-4 lg:px-12 flex flex-col lg:flex-row gap-4 lg:justify-between items-start lg:items-end">
        <h1 className="text-[30px] lg:text-[40px] leading-[2rem] lg:leading-[3.5rem]">
          Venture with Confidence, <br className="hidden lg:block" /> Thrive with Adino
        </h1>
        <div className="flex items-center flex-wrap gap-4 lg:gap-8">
          <span className="flex flex-col gap-2">
            <p>FOUNDED IN</p>
            <p className="font-bold">2020</p>
          </span>
          <span className="flex flex-col gap-2">
            <p>PORTFOLIO</p>
            <p className="font-bold">100+ Company</p>
          </span>
          <span className="flex flex-col gap-2">
            <p>HEADQUARTER</p>
            <p className="font-bold">Lagos, Nigeria</p>
          </span>
        </div>
      </div>
      <div className="px-4 lg:px-12 ">
      <Image
        src="/images/about3.png"
        alt="container"
        width={400}
        height={400}
        className="w-full h-[400px] object-cover"
      />
      </div>
      <div className="px-4 lg:px-12 flex flex-col place-self-center py-4 gap-4 items-center max-w-[660px]">
        <h6 className="font-semibold">COMPANY</h6>
        <p className="text-center">
          We hold principal investments in the financial and non-financial
          markets. We manage and optimize these investments and our commitment
          to value enables us exceed expectations. 
        </p>
        <p className="text-center">
        Our investments are based
          on rigorous and meticulous phases of research accompanied
          with expertise in treasury, wealth management and capital
          markets.
        </p>
      </div>

      <div className="px-4 lg:px-12 w-full flex flex-col-reverse lg:flex-row gap-8 justify-between items-center">
        <div className="w-full lg:w-1/2 space-y-4">
          <h4 className="font-bold border-b-[1.5px] w-2/3 border-b-gray-500">OUR VISION</h4>
          <p>
            Our vision is to create assets, optimize liabilities and maximize wealth
          </p>
        </div>
        <div className="w-full lg:w-1/2">
        <Image
          src="/images/about4.png"
          alt="container"
          width={400}
          height={400}
          className="w-full lg:h-[400px] object-contain"
        />
        </div>
      </div>

      <div className="px-4 lg:px-12 w-full flex flex-col lg:flex-row gap-8 justify-between items-center">
        <div className="w-full lg:w-1/2">
        <Image
          src="/images/about5.png"
          alt="about"
          width={400}
          height={400}
          className="w-full lg:h-[400px] object-contain"
        />
        </div>
        <div className="w-full lg:w-1/2 space-y-4">
          <h4 className="font-bold border-b-[1.5px] w-2/3 border-b-gray-500">OUR MISSION</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, velit! Saepe magnam nostrum quisquam 
            tempore asperiores ratione officia nam deleniti quis. Praesentium voluptatibus exercitationem eligendi
             hic magnam et obcaecati iusto?
          </p>
        </div>
      </div>

      <div className="w-full bg-[#166636] py-16">
        <div className="flex flex-col gap-4 px-4 lg:px-12 text-gray-300">
        <h6>OUR INSIGHTS</h6>
        <h2 className="text-[30px] leading-[30px] lg:text-[40px] lg:leading-[40px]">A Journey of Innovation <br /> and Success</h2>
        <div className="my-4 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
          <div className="flex flex-col">
            <div className="w-full h-[1px] bg-gray-300" />
            <span className="text-[40px] text-[#cefe85] pt-4">
              $8B+
            </span>
            <p className="text-sm">Under Management</p>
          </div>
          <div className="flex flex-col">
            <div className="w-full h-[1px] bg-gray-300" />
            <span className="text-[40px] text-[#cefe85] pt-4">
              $100+
            </span>
            <p className="text-sm">Active Portfolio Companies</p>
          </div>
          <div className="flex flex-col">
            <div className="w-full h-[1px] bg-gray-300" />
            <span className="text-[40px] text-[#cefe85] pt-4">
              65
            </span>
            <p className="text-sm">IPO'S Portfolio</p>
          </div>
          <div className="flex flex-col">
            <div className="w-full h-[1px] bg-gray-300" />
            <span className="text-[40px] text-[#cefe85] pt-4">
              175
            </span>
            <p className="text-sm">MMA</p>
          </div>
        </div>
        <div className="flex place-self-end max-w-[600px]">
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti atque, laboriosam ipsam rem aliquid vel nostrum fugit ducimus veniam sapiente mollitia alias maxime ut voluptatum eligendi earum hic dolore quasi dolores est? Expedita vero voluptatum placeat alias, illum impedit fugiat. Sequi nam perspiciatis impedit voluptatem obcaecati. Numquam eaque in eveniet.
        </p>
        </div>
        </div>
      </div>

      <div className="px-4 lg:px-12 py-8 flex flex-col gap-8">
        <h6>COMPANY VALUES</h6>
        <h2 className="text-[30px] lg:text-[40px] leading-[3rem]">Unveiling the Core Values <br className="hidden lg:block" /> at Adino</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-12">
          {gridData.map((item, index) => (
            <div
              key={index}
              style={{ backgroundColor: item.bgColor }}
              className={`h-[260px] lg:h-[400px] flex flex-col justify-between p-8 rounded-md`}
            >
              <p style={{ color: item.textColor }} className={`text-sm font-semibold ${item.bgColor}`}>{item.title}</p>
              <p style={{ color: item.textColor }} className={`text-sm text-[#17171a]`}>{item.content}</p> 
            </div>
          ))}
        </div>
      </div>

      <Team />
      
    </section>
  );
};

export default page;
