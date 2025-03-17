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
         className="w-full px-[12%] py-10 scroll-mt-20 bg-[url(/footer-bg-color.png)] bg-no-repeat bg-center bg-[length:90%_auto]"
      >
         <motion.h4
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mb-2 text-lg"
         >
            Connect with me
         </motion.h4>
         <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-5xl text-center"
         >
            Get in touch
         </motion.h2>

         <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mt-5 mb-12"
         >
            I&apos;d love to hear from you! If you have any questions, comments
            or feedback, please use the form below.
         </motion.p>

         <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="max-w-2xl mx-auto"
         >
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 mt-10 mb-8">
               <motion.input
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
               />
               <motion.input
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
               />
            </div>
            <motion.textarea
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ delay: 1.3, duration: 0.6 }}
               rows={6}
               placeholder="Enter your message"
               required
               className="w-full p-4 outline-none  border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
            ></motion.textarea>

            <motion.button
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 0.3 }}
               type="submit"
               className="py-3 px-8 w-max cursor-pointer flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
            >
               Submit now{" "}
               <Image
                  src={assets.right_arrow_white}
                  alt="arrow"
                  className="w-4"
               />
            </motion.button>
         </motion.form>
      </motion.div>
   );
};

export default Index;
