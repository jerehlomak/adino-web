import { teamData } from "@/constants";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";

const Team = () => {
  return (
    <section className="bg-black py-12">
      <div className="px-4 lg:px-12 w-full flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/5 space-y-4">
          <p className="text-sm uppercase text-white">our team</p>
          <p className="text-white text-[20px]">
            Our leadership drives our vision, ensuring that we stay ahead in a
            rapidly evolving landscape.
          </p>
        </div>
        <div className="w-full lg:w-3/5 grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {teamData.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                <div className="w-full h-[220px] bg-white rounded-sm"></div>
                <div className="space-y-2">
                    <p className="text-white font-[500]">{item.name}</p>
                    <p className="text-white font-[400] text-sm">{item.position}</p>
                </div> 
                <span className="flex gap-4 items-center text-white">
                    <FaLinkedin size={20} />
                    <FaXTwitter size={20} />
                    <TfiWorld size={20} /> 
                </span>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
