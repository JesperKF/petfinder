"use client";
import { BiHomeAlt } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { GoPerson } from "react-icons/go";

const Footer = () => {
  return (
    <section className="flex justify-between items-center bg-white p-4 bottom-0">
      <BiHomeAlt className="text-gray-500 w-6 h-6" />
      <FaRegStar className="text-gray-500 w-6 h-6" />
      <FiMessageCircle className="text-gray-500 w-6 h-6" />
      <GoPerson className="text-gray-500 w-6 h-6" />
    </section>
  );
};

export default Footer;
