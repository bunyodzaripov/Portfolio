"use client";
import Navbar from "../app/components/navbar";
import Header from "../app/components/header";
import About from "../app/components/about";
import Service from "../app/components/service";
import Work from "../app/components/work";
import Contact from "@/app/components/contact";

export default function Home() {
   return (
      <>
         <Navbar />
         <Header />
         <About />
         <Service />
         <Work />
         <Contact />
      </>
   );
}
