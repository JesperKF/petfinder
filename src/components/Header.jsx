"use client";
import { FiBell } from "react-icons/fi";

const Header = () => {
  return (
    <section className="flex justify-between items-center bg-white p-4">
      <h1 className="font-semibold">FamilyFriends</h1>
      <FiBell />
    </section>
  );
};

export default Header;
