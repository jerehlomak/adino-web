"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LiaFacebookSquare } from "react-icons/lia";
import { AiOutlineLinkedin } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="border-[1px] border-[#e5e5e5]">
      <div className="relative w-full flex items-center justify-between py-2 px-4 lg:px-12">
        <Link href="/"> 
        <Image
          src="/images/logo1.png"    
          alt="logo"  
          width={120}
          height={120}
          className="object-cover cursor-pointer"
        />
        </Link>

        <ul className="hidden lg:flex py-4 px-8 gap-8 text-black text-sm">
          <Link href="/about" className="cursor-pointer hover:underline">
            About
          </Link>
          <Link href='/career' className="cursor-pointer hover:underline">Careers</Link>
          <Link href='/news' className="cursor-pointer hover:underline">News</Link>
          <Link href='/subsidiaries' className="cursor-pointer hover:underline">Subsidiaries +</Link>
          <Link href='/contact' className="cursor-pointer hover:underline">Contact</Link>
        </ul>


         <button
          className="block lg:hidden text-[#166636] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>


        <div className="hidden lg:flex gap-8 items-center">
          <LiaFacebookSquare size={28} color="#166636" />
          <AiOutlineLinkedin size={24} color="#166636" />
          <IoLogoInstagram size={24} color="#166636" />
        </div>
       
    
      </div>

      <div className="lg:hidden flex justify-between items-center relative">
          <div
            className={`absolute top-[0px] left-0 right-0 bg-[#166636] z-10 shadow-secondary py-4 ${
              !menuOpen ? "-translate-y-[100vh]" : "translate-y-0"
            } transition-all duration-700`}
          >
            <ul className="flex flex-col gap-4 text-sm p-4 text-[#fff]">
              <Link
                onClick={() => setMenuOpen(false)}
                href="/about"
                className="cursor-pointer hover:bg-black px-4 py-2"
              >
                About
              </Link>
              <Link onClick={() => setMenuOpen(false)} href="/career" className="cursor-pointer hover:bg-black px-4 py-2">
                Careers
              </Link>
              <Link onClick={() => setMenuOpen(false)} href="/news" className="cursor-pointer hover:bg-black px-4 py-2">
                News
              </Link>
              <Link onClick={() => setMenuOpen(false)} href="/subsidiaries" className="cursor-pointer hover:bg-black px-4 py-2">
                Subsidiaries +
              </Link>
              <Link onClick={() => setMenuOpen(false)} href="/contact" className="cursor-pointer hover:bg-black px-4 py-2">
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
    </nav>
  );
};

export default Navbar;
