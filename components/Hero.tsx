"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { LiaFacebookSquare } from "react-icons/lia";
import { AiOutlineLinkedin } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { IoIosArrowRoundDown } from "react-icons/io";
import { HiOutlineMenu, HiX } from "react-icons/hi";

import { DropDown } from "@/components";
import { useDropdown } from "@/context/DropdownContext";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openDropdown, setOpenDropdown } = useDropdown();

  return (
    <main className="main__bg relative flex h-screen w-screen flex-col lg:justify-between py-8 px-6 lg:px-12">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 -z-10 left-0 w-full h-full object-cover lg:object-contain lg:transform scale-[1.2]"
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
        <div className="relative hidden lg:block px-6">
        <ul className="flex py-4 px-16 gap-8 bg-[#166636] rounded-full text-white text-[16px]">
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
          <li className="dropdown-container">
            <span className="cursor-pointer" onClick={() => setOpenDropdown(!openDropdown)}>Subsidiaries +</span>
            {openDropdown && (
              <div className="z-50">
                <DropDown />
              </div>
            )}
          </li>
          <Link href="/contact" className="cursor-pointer">
            Contact
          </Link>
        </ul>
        </div>
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

      <div className="flex flex-col z-1 items-center justify-center gap-4 text-white text-center mt-8 lg:mt-0 translate-y-1/2 lg:translate-y-0">
        <h1 className="text-[50px] leading-[50px] lg:text-[74px] lg:leading-[74px] max-w-[700px] lg:max-w-[900px]">
          Driving Tomorrow's Opportunity
        </h1>
        <button className="group flex items-center gap-4 rounded-full px-4 py-2 bg-[#49554f] hover:bg-[#3b4640] transition-colors duration-300">
          <span className="group-hover:translate-y-1 transition-transform duration-300 text-[18px]">
            Discover Adino
          </span>
          <span className="bg-white rounded-full p-2 text-black group-hover:bg-[#ad9056] group-hover:text-white transition-colors duration-300">
            <IoIosArrowRoundDown size={20} />
          </span>
        </button>       
      </div>

      <div className="w-full text-[18px] hidden z-10 lg:flex flex-col lg:flex-row items-center gap-8 text-white mt-8">
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
