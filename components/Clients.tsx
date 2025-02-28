import React from 'react'

const Clients = () => {
  return (
    <div className="px-4 lg:px-12 py-4 lg:py-8 flex flex-col gap-8 items-center">
        <div>
          <span className="text-[14px] font-sequel border-[1px] border-[#166636] bg-transparent py-2 px-4 rounded-full font-semibold text-[#166636]">
            TESTIMONIALS
          </span>
        </div>
        <h2 className="text-[#166636] text-center text-[48px] font-sequel leading-[1.25] tracking-[-0.48px] font-normal">
          Hear From Our <br />
          Happy Clients
        </h2>
        <div className="flex flex-col lg:flex-row w-full">
          <div className="w-full lg:w-1/3 rounded-[24px] bg-[#166636] p-8 h-[360px]"></div>
          <div className="w-full lg:w-2/3 rounded-[24px] bg-[#f0fdf4] p-8 h-[360px] flex flex-col justify-end">
            <div className="flex flex-col gap-4">
              <p className="text-[24px] font-lato text-[#166636] max-w-[600px]">
                "With Adino support, we streamlined cash flow and gained
                insights. Their team feels like a true partner."
              </p>
              <span className="flex gap-2 items-center text-[#166636]">
                <p className="text-[14px] font-semibold font-lato">Sarah Mitchell</p>-
                <p className="text-[14px] text-[rgba(5,79,48,0.7)] font-lato">CEO of TechSpark</p>
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-[24px] bg-[#f0fdf4] h-[220px] p-8 flex flex-col gap-4 justify-end">
            <p className="text-[14px] font-lato text-[#166636]">
              "With Adino support, we streamlined cash flow and gained insights.
              Their team feels like a true partner."
            </p>
            <span className="flex gap-2 items-center text-[#166636]">
              <p className="text-[14px] font-semibold font-lato">James Carter</p>-
              <p className="text-[14px] text-[rgba(5,79,48,0.7)] font-lato">CEO of GreenBuild</p>
            </span>
          </div>
          <div className="rounded-[24px] bg-[#f0fdf4] h-[220px] p-8 flex flex-col gap-4 justify-end">
            <p className="text-[14px] font-lato text-[#166636]">
              "With Adino support, we streamlined cash flow and gained insights.
              Their team feels like a true partner."
            </p>
            <span className="flex gap-2 items-center text-[#166636]">
              <p className="text-sm font-lato font-semibold">Linda Rodriguez</p>-
              <p className="text-[14px] text-[rgba(5,79,48,0.7)] font-lato">Owner of Bloom</p>
            </span>
          </div>
          <div className="rounded-[24px] bg-[#f0fdf4] h-[220px] p-8 flex flex-col gap-4 justify-end">
            <p className="text-[14px] font-lato text-[#166636]">
              "With Adino support, we streamlined cash flow and gained insights.
              Their team feels like a true partner."
            </p>
            <span className="flex gap-2 items-center text-[#166636]">
              <p className="text-sm font-lato font-semibold">David Thompson</p>-
              <p className="text-[14px] text-[rgba(5,79,48,0.7)] font-lato">Director at Apex</p>
            </span>
          </div>
        </div> 
      </div>
  )
}

export default Clients