"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Index = () => {
  return (
    <div className="mx-auto flex h-screen w-11/12 max-w-3xl flex-col items-center justify-center gap-4 text-center">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="profile"
          className="w-32 rounded-full"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="md:text-2x1 mb-3 flex items-center gap-2 text-xl"
      >
        Hi ! I&apos;m William Mark{" "}
        <Image src={assets.hand_icon} alt="hand" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3x1 sm:text-6x1 lg:text-[66px]"
      >
        frontend web developer based in london.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2x1 mx-auto"
      >
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </motion.p>
      <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="group font-outfit flex items-center gap-2 rounded-full border-[0.5px] border-gray-700 px-10 py-3 text-gray-700 duration-500 hover:bg-[#202020] hover:text-white"
        >
          contact me
          <Image
            src={assets.right_arrow}
            alt="arrow"
            className="w-4 group-hover:hidden"
          />
          <Image
            src={assets.right_arrow_white}
            alt="arrow white"
            className="hidden w-4 group-hover:block"
          />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/sample-resume.pdf"
          download
          className="group font-outfit flex items-center gap-2 rounded-full border-[0.5px] border-gray-700 px-10 py-3 text-gray-700 duration-500 hover:bg-[#202020] hover:text-white"
        >
          my resume
          <Image
            src={assets.download_icon}
            alt="download"
            className="w-4 group-hover:animate-bounce group-hover:invert"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Index;
