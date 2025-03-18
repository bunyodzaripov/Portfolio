"use client";
import Image from "next/image";
import { assets } from "@/assets/assets";
import React, { useEffect, useRef, useState } from "react";

const Index = () => {
  const sideMenuRef = useRef<HTMLUListElement | null>(null);
  const [isScroll, setIsScroll] = useState(false);
  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(0)";
    }
  };
  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 -z-10 w-11/12 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="bg" className="w-full}" />
      </div>

      <nav
        className={`fixed z-50 flex w-full items-center justify-between px-5 py-4 lg:px-8 xl:px-[8%] ${
          isScroll ? "bg-white/50 shadow-sm backdrop-blur-lg" : ""
        }`}
      >
        <a href="#top">
          <Image
            src={assets.logo}
            className="mr-14 w-28 cursor-pointer"
            alt="logo"
          />
        </a>

        <ul
          className={`font-outfit hidden items-center gap-6 rounded-full px-12 py-3 md:flex lg:gap-8 ${
            isScroll ? "" : "bg-white/50 shadow-sm"
          } `}
        >
          <li>
            <a className="text-dark" href="#top">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="cursor-pointer">
            <Image src={assets.moon_icon} alt="moon" className="w-6" />
          </button>

          <a
            href="#contact"
            className="group font-outfit relative ml-4 hidden items-center gap-3 rounded-full border border-gray-500 px-10 py-2.5 text-gray-700 duration-500 hover:bg-[#202020] hover:text-white lg:flex"
          >
            Contact
            <div className="relative h-3 w-3">
              <Image
                src={assets.arrow_icon}
                alt="arrow"
                className="absolute opacity-100 transition-opacity duration-500 group-hover:opacity-0"
              />
              <Image
                src={assets.arrow_icon_dark}
                alt="arrow white"
                className="absolute opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>
          </a>

          <button className="block cursor-pointer md:hidden" onClick={openMenu}>
            <Image src={assets.menu_black} alt="menu" className="w-6" />
          </button>
        </div>

        <ul
          ref={sideMenuRef}
          className="fixed top-0 -right-64 bottom-0 z-50 flex h-screen w-64 flex-col gap-4 bg-rose-50 px-10 py-20 transition duration-500 md:hidden"
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="close"
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Index;
