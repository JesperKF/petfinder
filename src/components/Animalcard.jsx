"use client";
import Link from "next/link";
import { GoStar } from "react-icons/go";

const Animalcard = ({ data }) => {
  return (
    <ul className="grid grid-cols-2 gap-6 p-4">
      {data.animals.map((animal) => (
        <Link
          key={animal.id}
          href={`/animals/${animal.id}`}
        >
          <li
            className="bg-white rounded-2xl shadow-md overflow-hidden"
            key={animal.id}
          >
            <div className="relative">
              <img
                className="rounded-2xl w-full h-[150px] object-cover"
                src={animal.photos?.[0]?.medium}
                alt={animal.name}
              />
              <button className="absolute top-2 right-2 bg-white/70 rounded-full p-1">
                <GoStar className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="p-3">
              <div className="flex justify-between items-center mb-1">
                <h2 className="font-semibold text-md">{animal.name}</h2>
                <span className="text-gray-400 text-sm">{animal.age}</span>
              </div>
              <p className="text-gray-400 text-sm">{animal.breeds?.primary}</p>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Animalcard;
