import { assets } from "@/assets/assets";
import Image from "next/image";

const Index = () => {
   return (
      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
         <div>
            <Image
               src={assets.profile_img}
               alt="profile"
               className="rounded-full w-32"
            />
         </div>
         <h3 className="flex items-center gap-2 text-xl md:text-2x1 mb-3">
            Hi ! I`m William Mark{" "}
            <Image src={assets.hand_icon} alt="hand" className="w-6" />
         </h3>
         <h1 className="text-3x1 sm:text-6x1 lg:text-[66px]">
            frontend web developer based in london.
         </h1>
         <p className="max-w-2x1 mx-auto">
            I am a frontend developer from California, USA with 10 years of
            experience in multiple companies like Microsoft, Tesla and Apple.
         </p>
         <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <a
               href="#contact"
               className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
            >
               contact me{" "}
               <Image
                  src={assets.right_arrow_white}
                  alt="arrow"
                  className="w-4"
               />
            </a>
            <a
               href="/sample-resume.pdf"
               download
               className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
            >
               my resume
               <Image
                  src={assets.download_icon}
                  alt="download"
                  className="w-4"
               />
            </a>
         </div>
      </div>
   );
};

export default Index;
