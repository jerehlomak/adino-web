import React from 'react'

const Banner = () => {
  return (
    <section className='py-8 px-4 lg:px-12'>
      <div className='w-full flex flex-col justify-center bg-[#166636] rounded-[50px] px-8 lg:px-16 py-12 lg:py-20 text-white'>
        <p className='text-sm'>SECTORS WE SPECIALIZE IN</p>
        <h1 className='text-[40px] lg:text-[60px]'>Capital</h1>
        <h1 className='text-[40px] lg:text-[60px]'>Partners</h1>
        <h1 className='text-[40px] lg:text-[60px]'>Global Markets</h1>
        <h1 className='text-[40px] lg:text-[60px]'>Asset Management</h1>
      </div>
    </section>
  )
}

export default Banner