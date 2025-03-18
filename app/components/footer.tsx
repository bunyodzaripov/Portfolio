import { assets } from "@/assets/assets";
import Image from "next/image";

const Index = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.logo} alt="logo" className="mx-auto mb-2 w-36" />

        <div className="mx-auto flex w-max items-center gap-2">
          <Image src={assets.mail_icon} alt="mail" className="w-6" />
          williammark@gmail.com
        </div>
      </div>

      <div className="mx-[10%] mt-12 items-center justify-between border-t border-gray-400 py-6 text-center sm:flex">
        <p> &copy; 2025 William Mark. All right reserved</p>
        <ul className="mt-4 flex items-center justify-center gap-10 sm:mt-0">
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
