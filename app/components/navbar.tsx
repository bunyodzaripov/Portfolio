import Image from "next/image";
import { assets } from "@/assets/assets";
import React, { useEffect, useRef, useState } from "react";

const Index = () => {
   const sideMenuRef = useRef<HTMLDivElement | any>(" ");
   const [isScroll, setIsScroll] = useState(false);
   const openMenu = () => {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
   };
   const closeMenu = () => {
      sideMenuRef.current.style.transform = "translateX(16rem)";
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
         <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
            <Image src={assets.header_bg_color} alt="bg" className="w-full}" />
         </div>

         <nav
            className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
               isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""
            }`}
         >
            <a href="#top">
               <Image
                  src={assets.logo}
                  className="w-28 cursor-pointer mr-14"
                  alt="logo"
               />
            </a>

            <ul
               className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
                  isScroll ? "" : "shadow-sm bg-white/50"
               } `}
            >
               <li>
                  <a className="" href="#top">
                     Home
                  </a>
               </li>
               <li>
                  <a href="#about">About</a>
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
               <button>
                  <Image src={assets.moon_icon} alt="moon" className="w-6" />
               </button>

               <a
                  href="#contact"
                  className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
               >
                  Contact
                  <Image src={assets.arrow_icon} alt="arrow" className="w-3" />
               </a>

               <button
                  className="block md:hidden cursor-pointer"
                  onClick={openMenu}
               >
                  <Image src={assets.menu_black} alt="menu" className="w-6" />
               </button>
            </div>

            <ul
               ref={sideMenuRef}
               className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
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
                     About
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
                     Contact me
                  </a>
               </li>
            </ul>
         </nav>
      </>
   );
};

export default Index;
