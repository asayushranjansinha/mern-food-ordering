import { Facebook, InstagramIcon, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="container mx-auto bg-[#fff4f4] py-6">
      <div className="grid md:grid-cols-3 gap-y-3 md:justify-items-center">
        <div>
          <Link to="/" className="flex items-center">
            <img
              src="https://res.cloudinary.com/dn6ze90sb/image/upload/v1716472053/logo_vtpnug.svg"
              alt="Dil Se Daawat Logo"
              className="h-8 w-8 shrink-0"
            />
            <span className="text-2xl font-semibold tracking-tight ml-2 text-brand-primary whitespace-nowrap">
              dil se <span className="text-pink-500">daawat</span>
            </span>
          </Link>
          <p className="font-medium text-gray-700 capitalize whitespace-nowrap">
            Delivering Smiles since 2023
          </p>
        </div>
        <div className="">
          <h5 className="text-neutral-900 font-bold">Get In Touch</h5>
          <span className="mt-4 text-gray-700 font-medium">
            (+91) 8709410000
          </span>
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

        <div className="flex flex-col text-sm">
          <span className="hover:underline font-medium trnsition cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:underline font-medium trnsition cursor-pointer">
            Terms & Conditions
          </span>
        </div>
      </div>
      <Separator className="my-2" />
      <p className="w-full text-center font-medium mt-2">
        &copy; 2024 Dil Se Daawat. All Rights Reserved
      </p>
    </footer>
  );
};
export default Footer;
