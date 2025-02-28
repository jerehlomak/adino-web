import Image from "next/image";

import { statsData } from "@/constants";
import Button from "./Button";

const About = () => {


  return (
    <div className="flex flex-col justify-between items-center gap-8 px-4 lg:px-12 py-16 text-center">
      <p>ABOUT US</p>
      <h1 className="text-[48px] leading-[48px] lg:text-[64px] lg:leading-[64px]">Introducing Adino.</h1>
      <p className="max-w-[607px] text-[18px]">
        Adino Investment Limited is an Investment holding company. We hold principal investments in the financial and non-financial markets. We manage and optimize these investments, and our commitment to value enables us to exceed expectations.
      </p>
      <Button text="How we invest" styles="bg-white text-[#166636]" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {statsData.map((item) => (
          <div
            key={item.id}
            className="relative h-[340px] w-full lg:w-[300px] object-cover rounded-md"
          >
            <Image
              src={item.imageSrc}
              alt={item.description}
              width={400}
              height={400}
              className="w-full h-full rounded-md"
            />
            <div
              className="absolute inset-0 rounded-md"
              style={{ backgroundColor: item.background }}
            ></div>
            <div className="absolute text-start bottom-5 left-0 m-4 text-white z-10">
              <h2 className="font-bold text-[2.5rem]">{item.stat}</h2>
              <p className="text-xs">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
