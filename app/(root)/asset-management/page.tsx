import { Header, NewsLetter, Testimonial } from "@/components";
import { serviceData } from "@/constants";
import Image from "next/image";

const AssetManagement = () => {
  return (
    <main>
      <section
        className="relative flex flex-col lg:justify-between py-8 px-6 lg:px-12"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(113,86,60,0.7), rgba(140,121,105,0.5), rgba(0,0,0,0.9)), url('/images/background.png')`,
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
          <p className="text-sm">ADINO</p>
          <h1 className="text-[64px] leading-[1.19] tracking-[-0.48px] font-sequel">Adino Asset Management</h1>
          <div className="flex gap-4 h-full">
            <div className="h-full w-[2px] bg-[#fff]" />
            <p className="max-w-[702px] text-left font-lato text-[20px] leading-[1.5] ">
              Unlock global financial opportunities with Adino Asset Management.
              We provide comprehensive market analysis, trading strategies, and
              investment solutions to help you navigate the complexities of the
              global market.
            </p>
          </div>
          <div>
            <button className="px-4 py-2.5 rounded-full text-[#fff] font-lato border-[1px] border-[#fff]">
              Speak to an Advisor
            </button>
          </div>
        </div>
      </section>

      {/* About section */}
      <div className="px-4 lg:px-12 pt-12 lg:py-16 flex flex-col gap-8">
        <div className="flex items-center gap-8 lg:gap-16">
          <p className="text-[14px] text-[#181818] font-lato font-medium whitespace-nowrap">ABOUT US</p>
          <div className="w-full bg-[#e7e4e4] h-[3px]" />
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-1/2 space-y-4 flex flex-col">
            <h1 className="text-[48px] leading-[1.25] tracking-[-0.48px] text-[#181818] font-sequel max-w-[579px]">
              Collaborate for Financial Success
            </h1>
            <p className="max-w-[480px] lg:pt-8 font-lato text-[18px] leading-[1.67] text-[#666] ">
              Unlock global financial opportunities with Adino Global Markets.
              We provide comprehensive market analysis, trading strategies, and
              investment solutions to help you navigate the complexities of the
              global market.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex gap-4">
            <div className="flex flex-col gap-4">
              <Image
                src="/images/asset1.png"
                alt="asset"
                width={400}
                height={400}
                className="object-cover h-[420px]"
              />
              <div className="flex flex-col gap-2">
                <h4 className="text-3xl lg:text-[56px] leading-[1.14] tracking-[-0.56px] text-[#181818] font-sequel">100%</h4>
                <p className="text-[16px] font-lato text-[#666] leading-[1.25] tracking-[0.16px] ">Projects successfully done this year</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Image
                src="/images/asset2.png"
                alt="asset"
                width={400}
                height={400}
                className="object-cover h-[420px]"
              />
              <div className="flex flex-col gap-2">
                <h4 className="text-3xl lg:text-[56px] leading-[1.14] tracking-[-0.56px] text-[#181818] font-sequel">12+</h4>
                <p className="text-[16px] font-lato text-[#666] leading-[1.25] tracking-[0.16px] ">Projects successfully done this year</p>
              </div>
            </div>
          </div>
        </div>
      </div> 

      {/* Services Section */}
      <div className="px-4 lg:px-12 py-8 lg:py-16 flex flex-col gap-8">
        <div className="flex items-center gap-8 lg:gap-16">
          <p className="text-[14px] font-lato text-[#181818] font-medium whitespace-nowrap">WHAT WE DO</p>
          <div className="w-full bg-[#e7e4e4] h-[3px]" />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[48px] leading-[1.25] tracking-[-0.48px] text-[#181818] font-sequel">Our Services</h1>
          <p className="max-w-[647px] font-lato text-[18px] leading-[1.67] text-[#666]">
            At Adino, we offer a range of premium architectural and design
            services tailored to meet your unique needs.
          </p>
          <div className="py-4">
            {serviceData.map((service, idx) => (
              <div
                key={idx}
                className="py-4 flex flex-col lg:flex-row justify-between gap-4"
              >
                <h4 className="font-normal font-sequel leading-[1.67] text-[#181818] text-[24px]">{service.name}</h4>
                <p className="max-w-[400px] font-lato text-[18px] leading-[1.67] text-[#666] text-left ">{service.desc}</p>
                <div className="h-[150px] w-[150px] bg-[#d9d9d9]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* testimonial section */}
      <div className="py-16 bg-[#166636]">
        <div className="px-4 lg:px-12">
          <div className="flex items-center gap-8 lg:gap-16">
            <p className="text-[14px] font-lato font-medium  whitespace-nowrap text-[#fff]">
              TESTIMONIALS
            </p>
            <div className="w-full bg-[#e7e4e4] h-[2px]" />
          </div>
          <div className="mt-8 flex gap-4">
            <Testimonial />
          </div>
        </div>
      </div>
      <div className="bg-[#f7f7f7] py-16">
        <div className="px-4 lg:px-12">
          <NewsLetter />
        </div>
      </div>
    </main>
  );
};

export default AssetManagement;
