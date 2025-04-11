"use client";
import { BiHomeAlt } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const currentPage = usePathname();

  return (
    <section className="flex justify-between items-center bg-white p-4 bottom-0">
      <Link
        href="/"
        className={` hover:bg-white hover:text-[#F2968F] ${
          currentPage === "/" ? " text-[#F2968F]" : "text-gray-500"
        }`}
      >
        <BiHomeAlt className="w-6 h-6" />
      </Link>
      <FaRegStar className="text-gray-500 w-6 h-6" />
      <FiMessageCircle className="text-gray-500 w-6 h-6" />
      <GoPerson className="text-gray-500 w-6 h-6" />
    </section>
  );
};

export default Footer;
