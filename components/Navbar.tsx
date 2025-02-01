"use client";

import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { LiaFacebookSquare } from "react-icons/lia";
import { AiOutlineLinkedin } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

        {/* Desktop Menu */}
        <ul className="hidden lg:flex py-4 px-8 gap-8 text-black text-sm">
          <Link href="/about" className="cursor-pointer">
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

          {/* More Dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="cursor-pointer flex items-center gap-1">More <RiArrowDropDownLine size={24} /></span>
            {dropdownOpen && (
              <ul className="absolute top-3 left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md py-2">
                <Link href="/market" className="block px-4 py-2 hover:bg-gray-100">Market</Link>
                <Link href="/asset-management" className="block px-4 py-2 hover:bg-gray-100">Asset Management</Link>
                <Link href="/asset-partners" className="block px-4 py-2 hover:bg-gray-100">Asset Partners</Link>
                <Link href="/capital" className="block px-4 py-2 hover:bg-gray-100">Capital</Link>
                <Link href="/news2" className="block px-4 py-2 hover:bg-gray-100">News 2</Link>
              </ul>
            )}
          </div>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden text-[#166636] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>

        {/* Desktop Social Icons */}
        <div className="hidden lg:flex gap-8 items-center">
          <LiaFacebookSquare size={28} color="#166636" />
          <AiOutlineLinkedin size={24} color="#166636" />
          <IoLogoInstagram size={24} color="#166636" />
        </div>
      </div>

      {/* Mobile Menu */}
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
            <Link
              onClick={() => setMenuOpen(false)}
              href="/career"
              className="cursor-pointer hover:bg-black px-4 py-2"
            >
              Careers
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              href="/news"
              className="cursor-pointer hover:bg-black px-4 py-2"
            >
              News
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              href="/subsidiaries"
              className="cursor-pointer hover:bg-black px-4 py-2"
            >
              Subsidiaries +
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              href="/contact"
              className="cursor-pointer hover:bg-black px-4 py-2"
            >
              Contact
            </Link>

            {/* More Dropdown in Mobile */}
            <details className="group">
              <summary className="cursor-pointer px-4 py-2 hover:bg-black list-none flex items-center gap-2">More <RiArrowDropDownLine size={24} /></summary>
              <ul className="pl-4">
                <Link href="/market" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-100">Market</Link>
                <Link href="/asset-management" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-100">Asset Management</Link>
                <Link href="/asset-partners" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-100">Asset Partners</Link>
                <Link href="/capital"  onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-100">Capital</Link>
                <Link href="/news2"  onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-100">News 2</Link>
              </ul>
            </details>
          </ul>

          {/* Mobile Social Icons */}
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
