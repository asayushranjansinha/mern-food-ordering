import { Facebook, InstagramIcon, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="container mx-auto py-6 bg-[#FEF8EC]">
      <div className="w-full grid grid-cols-2 md:grid-cols-4">
        <div className="">
          <Link className="flex items-center" to={"/"}>
            <span className="font-semibold text-2xl tracking-tighter">
              <span className="text-pink-500">Dil Se</span>
              <span className="text-yellow-500"> Daawat</span>
            </span>
            <img
              src="./bowl.svg"
              alt="Bowl Icon"
              className="h-8 w-8 ml-1"
            />
          </Link>
          <address className="font-medium text-gray-700">
            Lorem ipsum dolor <br />
            sit amet random.
          </address>

          <div className="flex flex-row gap-3 py-3">
            <div className="bg-white rounded-full p-2 drop-shadow-md cursor-pointer">
                <InstagramIcon />
            </div>
            <div className="bg-white rounded-full p-2 drop-shadow-md cursor-pointer">
                <Twitter />
            </div>
            <div className="bg-white rounded-full p-2 drop-shadow-md cursor-pointer">
                <Facebook />
            </div>
          </div>
        </div>
        <div className="">
            <h5 className="text-neutral-900 font-bold">Get In Touch</h5>
            <span className="mt-4 text-gray-700 font-medium">(+91)8709410000</span>
        </div>
        <span className="text-neutral-900 font-bold">Privacy Policy</span>
        <span className="text-neutral-900 font-bold">Terms & Cond.</span>
      </div>
      <Separator className="my-2"/>
      <p className="w-full text-center font-medium mt-2">&copy; 2024 Dil Se Daawat. All Rights Reserved</p>
    </footer>
  );
};
export default Footer;
