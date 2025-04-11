"use client";
import Image from "next/image";

const Button = ({ text, src, alt }) => {
  return (
    <button className="flex items-center gap-2.5 text-lg text-gray-400 border-2 border-solid border-gray-400 rounded-full px-6 py-3 hover:bg-[#F2968F] hover:text-white transition duration-300 ease-in-out hover:border-[#F2968F]">
      <Image
        src={src}
        alt={alt}
        width={32}
        height={32}
        className="rounded-full min-w-[32px] flex-shrink-0"
      />
      {text}
    </button>
  );
};

export default Button;
