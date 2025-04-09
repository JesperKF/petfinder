"use client";
import { FiBell } from "react-icons/fi";

const Header = () => {
  return (
    <section className="flex justify-between items-center bg-white p-4">
      <h1 className="text-lg font-semibold">FamilyFriends</h1>
      <FiBell className="text-black w-6 h-6" />
    </section>
  );
};

export default Header;
