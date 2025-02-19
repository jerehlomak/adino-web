"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LiaFacebookSquare } from "react-icons/lia";
import { AiOutlineLinkedin } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { IoIosArrowRoundDown } from "react-icons/io";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main
      className="main__bg relative flex h-screen w-screen flex-col lg:justify-between py-8 px-6 lg:px-12"
      // style={{
      //   backgroundImage: `url('/images/background.png')`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   height: "100vh",
      // }}
    >
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <nav className="relative flex items-center justify-between z-10">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={120}
          height={120}
          className="object-cover cursor-pointer"
        />
        <ul className="hidden lg:flex py-4 px-8 gap-8 bg-[#166636] rounded-full text-white text-sm">
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer"
          >
            About
          </Link>
          <Link href="/career" className="cursor-pointer">
            Careers
          </Link>
          <Link href="/news" className="cursor-pointer">
            News
          </Link>
          <Link href="/subsidiaries" className="cursor-pointer">
            Subsidiaries +
          </Link>
          <Link href="/contact" className="cursor-pointer">
            Contact
          </Link>
        </ul>
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>

        <div className="hidden lg:flex gap-8 items-center">
          <LiaFacebookSquare size={28} color="white" />
          <AiOutlineLinkedin size={24} color="white" />
          <IoLogoInstagram size={24} color="white" />
        </div>
      </nav>

      <div className="lg:hidden z-20 flex justify-between items-center relative">
        <div
          className={`absolute top-[20px] left-0 right-0 bg-[#166636] z-10 shadow-secondary py-4 ${
            !menuOpen ? "-translate-y-[100vh]" : "translate-y-0"
          } transition-all duration-700`}
        >
          <ul className="flex flex-col gap-4 text-sm p-4 text-[#fff]">
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:bg-black px-4 py-2"
            >
              About
            </Link>
            <Link
              href="/career"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:bg-black px-4 py-2"
            >
              Careers
            </Link>
            <Link
              href="/news"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:bg-black px-4 py-2"
            >
              News
            </Link>
            <Link
              href="/subsidiaries"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:bg-black px-4 py-2"
            >
              Subsidiaries +
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:bg-black px-4 py-2"
            >
              Contact
            </Link>
          </ul>
          <div className="flex items-center gap-4 mt-4 text-white px-8">
            <LiaFacebookSquare size={28} />
            <AiOutlineLinkedin size={24} />
            <IoLogoInstagram size={24} />
          </div>
        </div>
      </div>

      <div className="flex flex-col z-10 items-center justify-center gap-4 text-white text-center mt-8 lg:mt-0 translate-y-1/2 lg:translate-y-0">
        <h1 className="text-[2.5rem] lg:text-[3.5rem] lg:leading-[3.5rem] max-w-[500px] lg:max-w-[600px]">
          Driving Tomorrow's Opportunity
        </h1>
        <button className="flex items-center gap-4 rounded-full px-6 py-3 bg-[#49554f]">
          Discover Adino
          <span className="bg-white rounded-full p-2">
            <IoIosArrowRoundDown color="black" />
          </span>
        </button>
      </div>

      <div className="w-full hidden z-10 lg:flex flex-col lg:flex-row items-center gap-8 text-white mt-8">
        <p className="w-full lg:w-2/5">
          We provide smart, diversified investment strategies tailored for
          sustainable growth
        </p>
        <span className="w-full lg:w-1/5 flex flex-col gap-4">
          <div className="bg-white h-[1px] w-full" />
          <p>Sustainability</p>
        </span>
        <span className="w-full lg:w-1/5 flex flex-col gap-4">
          <div className="bg-white h-[1px] w-full" />
          <p>Innovation</p>
        </span>
        <span className="w-full lg:w-1/5 flex flex-col gap-4">
          <div className="bg-white h-[1px] w-full" />
          <p>Integrity</p>
        </span>
      </div>
    </main>
  );
};

export default Hero;
