"use client";

import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LiaFacebookSquare } from "react-icons/lia";
import { AiOutlineLinkedin } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { HiOutlineMenu, HiX } from "react-icons/hi";

import { DropDown } from "@/components";
import { useDropdown } from "@/context/DropdownContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openDropdown, setOpenDropdown } = useDropdown();

  const pathname = usePathname();

  const linkClass = (path: string) =>
    `cursor-pointer ${pathname === path ? "text-green-600 font-bold font-lato text-[16px]" : "font-lato text-[16px]"}`;

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
        <div className="relative hidden lg:block px-6">
        <ul className="lg:flex py-4 px-16 gap-8 text-black text-sm">
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link href="/career" className={linkClass("/career")}>
            Careers
          </Link>
          <Link href="/news" className={linkClass("/news")}>
            News
          </Link>
          <li className="dropdown-container font-lato text-[16px]">
            <span
              className="cursor-pointer"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              Subsidiaries +
            </span>
            {openDropdown && (
              <div className="z-50">
                <DropDown />
              </div>
            )}
          </li>
          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>

          {/* More Dropdown */}
          {/* <div
            className="relative cursor-pointer"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="cursor-pointer flex items-center gap-1">
              More <RiArrowDropDownLine size={24} />
            </span>
            {dropdownOpen && (
              <ul className="absolute top-3 left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md py-2">
                <Link href="/market" className={linkClass("/market")}>
                  Market
                </Link>
                <Link href="/asset-management" className={linkClass("/asset-management")}>
                  Asset Management
                </Link>
                <Link href="/asset-partners" className={linkClass("/asset-partners")}>
                  Asset Partners
                </Link>
                <Link href="/capital" className={linkClass("/capital")}>
                  Capital
                </Link>
                <Link href="/news2" className={linkClass("/news2")}>
                  News 2
                </Link>
              </ul>
            )}
          </div> */}
        </ul>
        </div>

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
              href="/about"
              onClick={() => setMenuOpen(false)}
              className={linkClass("/about")}
            >
              About
            </Link>
            <Link
              href="/career"
              onClick={() => setMenuOpen(false)}
              className={linkClass("/career")}
            >
              Careers
            </Link>
            <Link
              href="/news"
              onClick={() => setMenuOpen(false)}
              className={linkClass("/news")}
            >
              News
            </Link>
            <Link
              href="/subsidiaries"
              onClick={() => setMenuOpen(false)}
              className={linkClass("/subsidiaries")}
            >
              Subsidiaries +
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className={linkClass("/contact")}
            >
              Contact
            </Link>

            {/* More Dropdown in Mobile */}
            <details className="group">
              <summary className="cursor-pointer px-4 py-2 hover:bg-black list-none flex items-center gap-2">
                More <RiArrowDropDownLine size={24} />
              </summary>
              <ul className="pl-4">
                <Link
                  href="/market"
                  onClick={() => setMenuOpen(false)}
                  className={linkClass("/market")}
                >
                  Market
                </Link>
                <Link
                  href="/asset-management"
                  onClick={() => setMenuOpen(false)}
                  className={linkClass("/asset-management")}
                >
                  Asset Management
                </Link>
                <Link
                  href="/asset-partners"
                  onClick={() => setMenuOpen(false)}
                  className={linkClass("/asset-partners")}
                >
                  Asset Partners
                </Link>
                <Link
                  href="/capital"
                  onClick={() => setMenuOpen(false)}
                  className={linkClass("/capital")}
                >
                  Capital
                </Link>
                <Link
                  href="/news2"
                  onClick={() => setMenuOpen(false)}
                  className={linkClass("/news2")}
                >
                  News 2
                </Link>
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
