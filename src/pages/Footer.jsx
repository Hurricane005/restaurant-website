import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center h-24 sm:flex-row bg-details justify-evenly">
      <div>
        <h1 className="text-4xl font-bold">.FOODSPACE</h1>
      </div>
      <div className="flex space-x-4 ">
        <FaFacebook size={28} className="cursor-pointer" />
        <FaInstagram size={28} className="cursor-pointer" />
        <FaTiktok size={28} className="cursor-pointer" />
        <FaTwitter size={28} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
