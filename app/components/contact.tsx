"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full scroll-mt-20 bg-[url(/footer-bg-color.png)] bg-[length:90%_auto] bg-center bg-no-repeat px-[12%] py-10"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-2 text-center text-lg"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl"
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mx-auto mt-5 mb-12 max-w-2xl text-center"
      >
        I&apos;d love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="font-outfit mx-auto max-w-2xl"
      >
        <div className="mt-10 mb-8 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 rounded-md border-[0.5px] border-gray-400 bg-white p-3 outline-none"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 rounded-md border-[0.5px] border-gray-400 bg-white p-3 outline-none"
          />
        </div>
        <motion.textarea
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          rows={6}
          placeholder="Enter your message"
          required
          className="mb-6 w-full rounded-md border-[0.5px] border-gray-400 bg-white p-4 outline-none"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="group mx-auto flex w-max cursor-pointer items-center justify-between gap-2 rounded-full border-[0.5px] border-gray-700 px-8 py-3 duration-500 hover:bg-[#202020] hover:text-white"
        >
          Submit now
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
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Index;
