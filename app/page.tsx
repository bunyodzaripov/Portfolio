"use client";
import Navbar from "../app/components/navbar";
import Header from "../app/components/header";
import About from "../app/components/about";
import Service from "../app/components/service";

export default function Home() {
   return (
      <>
         <Navbar />
         <Header />
         <About />
         <Service />
      </>
   );
}
