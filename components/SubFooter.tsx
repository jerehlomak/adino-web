import React from 'react'

const SubFooter = () => {
  return (
    <div className="bg-[#e5e5e5] py-16 px-4 lg:px-12 flex flex-col items-center justify-center gap-4">
        <h1 className="text-[40px] text-center">Pitch Your Vision, Let&apos;s Talk.</h1>
        <p className="text-center">
          Got an innovative venture? Share your pitch Adino Capital and schedule a meeting. <br />
          Submit your email below, and let&apos;s explore the potential partnership together.
        </p>
        <div className="flex flex-col gap-4 w-full max-w-[400px]">
          <input type="text" placeholder="Enter your email" className="w-full outline-none border-[#beb6b6] border-[1px] bg-white rounded-md px-4 py-2.5" />
          <button className="w-full bg-[#166636] rounded-full text-white px-4 py-2.5">Submit</button>
        </div>
      </div>
  )
}

export default SubFooter