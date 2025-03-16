import { assets } from "@/assets/assets";
import Image from "next/image";

const Index = () => {
   return (
      <div className="mt-20">
         <div className="text-center">
            <Image src={assets.logo} alt="logo" className="w-36 mx-auto mb-2" />

            <div className="w-max flex items-center mx-auto gap-2">
               <Image src={assets.mail_icon} alt="mail" className="w-6" />
               williammark@gmail.com
            </div>
         </div>

         <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
            <p> &copy; 2025 William Mark. All right reserved</p>
            <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
               <li>
                  <a href="#">Github</a>
               </li>
               <li>
                  <a href="#">Instagram</a>
               </li>
               <li>
                  <a href="#">Telegram</a>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Index;
