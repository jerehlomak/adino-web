"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LiaFacebookSquare } from "react-icons/lia";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineLinkedin } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  const isActive = (path: string) => pathname === path ? "text-green-400 font-semibold" : "";

  return (
    <>
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="logo"
          width={120}
          height={120}
          className="object-cover cursor-pointer"
        />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex px-8 gap-8 text-white text-sm">
          <Link href="/about" className={`cursor-pointer ${isActive("/about")}`}>About</Link>
          <Link href="/career" className={`cursor-pointer ${isActive("/career")}`}>Careers</Link>
          <Link href="/news" className={`cursor-pointer ${isActive("/news")}`}>News</Link>
          <Link href="/subsidiaries" className={`cursor-pointer ${isActive("/subsidiaries")}`}>Subsidiaries +</Link>
          <Link href="/contact" className={`cursor-pointer ${isActive("/contact")}`}>Contact</Link>

          {/* More Dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="cursor-pointer flex items-center gap-1">More <RiArrowDropDownLine size={24} /></span>
            {dropdownOpen && (
              <ul className="absolute top-3 left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md py-2">
                <Link href="/market" className={`block px-4 py-2 hover:bg-gray-100 ${isActive("/market")}`}>Market</Link>
                <Link href="/asset-management" className={`block px-4 py-2 hover:bg-gray-100 ${isActive("/asset-management")}`}>Asset Management</Link>
                <Link href="/asset-partners" className={`block px-4 py-2 hover:bg-gray-100 ${isActive("/asset-partners")}`}>Asset Partners</Link>
                <Link href="/capital" className={`block px-4 py-2 hover:bg-gray-100 ${isActive("/capital")}`}>Capital</Link>
                <Link href="/news2" className={`block px-4 py-2 hover:bg-gray-100 ${isActive("/news2")}`}>News 2</Link>
              </ul>
            )}
          </div>
        </ul>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>

        {/* Desktop Social Icons */}
        <div className="hidden lg:flex gap-8 items-center">
          <LiaFacebookSquare size={28} color="white" />
          <AiOutlineLinkedin size={24} color="white" />
          <IoLogoInstagram size={24} color="white" />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="lg:hidden flex justify-between items-center relative">
        <div
          className={`absolute top-[20px] left-0 right-0 bg-[#166636] z-10 shadow-secondary py-4 transition-all duration-700 ${
            !menuOpen ? "-translate-y-[100vh]" : "translate-y-0"
          }`}
        >
          <ul className="flex flex-col gap-4 text-sm p-4 text-[#fff]">
            <Link href="/about" onClick={() => setMenuOpen(false)} className={`cursor-pointer hover:bg-black px-4 py-2 ${isActive("/about")}`}>About</Link>
            <Link href="/career" onClick={() => setMenuOpen(false)} className={`cursor-pointer hover:bg-black px-4 py-2 ${isActive("/career")}`}>Careers</Link>
            <Link href="/news" onClick={() => setMenuOpen(false)} className={`cursor-pointer hover:bg-black px-4 py-2 ${isActive("/news")}`}>News</Link>
            <Link href="/subsidiaries" onClick={() => setMenuOpen(false)} className={`cursor-pointer hover:bg-black px-4 py-2 ${isActive("/subsidiaries")}`}>Subsidiaries +</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className={`cursor-pointer hover:bg-black px-4 py-2 ${isActive("/contact")}`}>Contact</Link>

            {/* More Dropdown in Mobile */}
            <details className="group">
              <summary className="cursor-pointer px-4 py-2 hover:bg-black list-none flex items-center gap-2">More <RiArrowDropDownLine size={24} /></summary>
              <ul className="pl-4">
                <Link href="/market" onClick={() => setMenuOpen(false)} className={`block px-4 py-2 hover:bg-gray-100 ${isActive("/market")}`}>Market</Link>
                <Link href="/asset-management" onClick={() => setMenuOpen(false)} className={`block px-4 py-2 hover:bg-gray-100 ${isActive("/asset-management")}`}>Asset Management</Link>
                <Link href="/asset-partners" onClick={() => setMenuOpen(false)} className={`block px-4 py-2 hover:bg-gray-100 ${isActive("/asset-partners")}`}>Asset Partners</Link>
                <Link href="/capital"  onClick={() => setMenuOpen(false)} className={`block px-4 py-2 hover:bg-gray-100 ${isActive("/capital")}`}>Capital</Link>
                <Link href="/news2"  onClick={() => setMenuOpen(false)} className={`block px-4 py-2 hover:bg-gray-100 ${isActive("/news2")}`}>News 2</Link>
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
    </>
  );
};
export default Header;
