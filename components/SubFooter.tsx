import React from 'react'

const SubFooter = () => {
  return (
    <div className="bg-[#e5e5e5] py-16 px-4 lg:px-12 flex flex-col items-center justify-center gap-4">
        <h1 className="text-[48px] text-center font-sequel leading-[1.25] tracking-[-0.48px] text-[#17171a] ">Pitch Your Vision, Let's Talk.</h1>
        <p className="text-center text-[#53535c] font-lato leading-[1.67] text-[18px] ">
          Got an innovative venture? Share your pitch Adino Capital and schedule a meeting. <br />
          Submit your email below, and let's explore the potential partnership together.
        </p>
        <div className="flex flex-col gap-4 w-full max-w-[400px]">
          <input type="text" placeholder="Enter your email" className="w-full outline-none font-lato border-[#f7f4f4] border-[1px] bg-white rounded-md px-4 py-2.5" />
          <button className="w-full font-lato text-[16px] bg-[#166636] rounded-full text-white px-4 py-2.5">Submit</button>
        </div>
      </div>
  )
}

export default SubFooter