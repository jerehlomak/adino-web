import React from 'react'
import { FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className=''>
      
      <div className="py-8 px-4 lg:px-12">

      
      <div className='bg-[#166636] overflow-x-hidden relative rounded-xl text-[#d9d2cc] py-12 px-12 flex flex-col justify-between lg:h-[75vh]'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
        <div className='w-[150px] flex flex-col gap-6'>
          <hr />
          <h4>Social</h4>
          <div className='flex flex-col gap-4'>
            <span className='rounded-full bg-[#d9d2cc] h-8 w-8 flex items-center justify-center'>
              <FaTwitter className='text-black' />
            </span>
            <span className='rounded-full bg-[#d9d2cc] h-8 w-8 flex items-center justify-center'>
              <FaLinkedin className='text-black' />
            </span>
            <span className='rounded-full bg-[#d9d2cc] h-8 w-8 flex items-center justify-center'>
              <FaYoutube className='text-black' />
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-6 w-[150px]'>
          <hr />
          <h4 className='text-[18px]'>Explore Adino</h4>
          <div className='flex flex-col gap-4'>
          <Link href='#' className='text-sm'>About Us</Link>
          <Link href='#' className='text-sm'>Strategies</Link>
          <Link href='#' className='text-sm'>Subsidiaries</Link>
          <Link href='#' className='text-sm'>Insights & News</Link>
          <Link href='#' className='text-sm'>Careers</Link>
          </div>
        </div>
        <div className='flex flex-col gap-6 w-[150px]'>
          <hr />
          <h4 className='text-[18px]'>Governance</h4>
          <div className='flex flex-col gap-4'>
          <Link href='#' className='text-sm'>Terms of Use</Link>
          <Link href='#' className='text-sm'>Privacy Policy</Link>
          <Link href='#' className='text-sm'>Disclaimer</Link>
          </div>
        </div>
        <div className='flex flex-col gap-6 w-[150px]'>
          <hr />
          <h4 className='text-[18px]'>Address</h4>
          <div className='flex flex-col gap-4'>
          <Link href='#' className='text-sm'>About Us</Link>
          <Link href='#' className='text-sm'>Strategies</Link>
          </div>
        </div>
        <div className='flex flex-col gap-6 w-[150px]'>
          <hr />
          <h4 className='text-[18px]'>More Information</h4>
          <div className='flex flex-col gap-4'>
          <Link href='#' className='text-sm'>Contact Us</Link>
          </div>
        </div>
      </div>
      <p>
      © Adino Investment Limited, Inc. 2024 All Rights Reserved.
      </p>
        {/* <div className='overflow-x-hidden'>
        <Image 
          src='/images/logo.png'
          alt='footer'
          width={400}
          height={400}
          className='absolute z-10 -right-[20rem] bottom-1/2 translate-y-1/2'
        />
        </div> */}
      </div>
      </div>
    </footer>
  )
}

export default Footer