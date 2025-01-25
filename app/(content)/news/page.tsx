import React from 'react'
import Image from "next/image"
import { Button, NewsCard } from '@/components'
import { newsData } from '@/constants'
import { FaLinkedin } from "react-icons/fa";

const page = () => {
  return (
    <section className='flex flex-col gap-8 py-12'>
      <div className='flex flex-col px-4 lg:px-12  justify-center items-center gap-4'>
        <p className='text-xs'>NEWS & INSIGHTS</p>
        <h1 className='text-[25px] lg:text-[40px] text-center lg:leading-[3rem] max-w-[700px] '>
          Explore our latest thinking and stay
          up to date with Adino news.
        </h1>
        <Button text='Follow us on LinkedIn' styles='bg-white text-[#166636]' />

        <ul className='flex items-center justify-center flex-wrap gap-4 mt-4 text-sm text-gray-600'>
          <li className='bg-[#e5e5e5] whitespace-nowrap p-2 rounded-full border-[1px] border-gray-700'>All Categories</li>
          <li className='whitespace-nowrap'>Venture Insights</li>
          <li className='whitespace-nowrap'>Strategic Partnerships</li>
          <li className='whitespace-nowrap'>Industry Trends</li>
          <li className='whitespace-nowrap'>Sustainability Spotlight</li>
        </ul>

        <div className='max-w-[85%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
          {newsData.map((news, index) => (
            <NewsCard 
              id={index}
              description={news.description}
              category={news.category}
              imageSrc={news.imageSrc}
              title={news.title}
            />
          ))}
        </div>

        <div className='mt-8 space-y-4'>
          <p className='text-xs text-gray-600 font-semibold text-center'>SHOWING 8 OF 30</p>
          <button className='flex items-center font-bold gap-2 px-4 py-2.5 border-[1px] border-[#166636] rounded-full text-xs text-[#166636]'>
            Load more <span className='bg-[#166636] flex items-center justify-center text-white rounded-full h-6 w-6 text-[18px]'>+</span> 
          </button> 
        </div>
      </div>

      <div className='bg-[#1f2020] flex flex-col items-center justify-center py-16 text-white gap-4'>
          <p className='text-center max-w-[400px] uppercase'>
            Explore our views and opinions on the latest investment and industry trends.
          </p>
          <div className='flex items-center gap-2 bg-[#166636] px-4 py-2.5 rounded-full'>
          <p className='text-xs'>Follow us on LinkedIn </p>
          <span className='flex items-center justify-center w-6 h-6 rounded-full bg-white z-10'>
            <FaLinkedin color='#166636' />
          </span>
          </div>
          
      </div>

      <div className='px-4 lg:px-12 pt-12'>
        <div className='bg-[#f4f3f1] w-full rounded-md flex flex-col lg:flex-row lg:gap-8 justify-between py-8 px-4 lg:px-16'>
          <div className='w-full lg:w-1/2 space-y-4'>
            <p className='uppercase font-[400] underline'>it all starts with brilliant people</p>
            <p className='text-sm'>We know that doing the best work</p>
            <Button 
              text='Explore Services'
              styles='bg-white text-[#166636]'
            />
          </div>
          <div className='w-full lg:w-1/2'>
          <Image 
            src='/images/news.png'
            alt='news'
            width={400}
            height={400}
            className='w-full h-[400px] object-contain'
          />
          </div>
        </div>
      </div>
    </section>
  )
}

export default page