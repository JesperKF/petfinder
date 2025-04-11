import Link from "next/link";
import { GoStar } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";

const Detailed = async ({ params }) => {
  const { id } = await params;

  const data = await fetch(`https://api.petfinder.com/v2/animals/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    cache: "no-store",
  });
  const animal = await data.json();

  return (
    <section className="flex flex-col gap-4 p-4">
      <div className="relative">
        <img
          className="rounded-2xl w-full h-auto object-cover"
          src={animal.animal.photos?.[0]?.medium}
          alt={animal.animal.name}
        />
        <button className="absolute top-2 right-2 bg-white/70 rounded-full p-1">
          <GoStar className="w-5 h-5 text-gray-500" />
        </button>
        <Link
          href="/"
          className="absolute top-2 left-2 bg-white/70 rounded-full p-1"
        >
          <IoIosArrowBack className="w-5 h-5 text-gray-500" />
        </Link>
      </div>
      <h1 className="text-xl font-bold">{animal.animal.name}</h1>
      <ul className="flex gap-4">
        <li className="rounded-full text-sm bg-[#ACD7FF] px-4 py-2">
          {animal.animal.type}
        </li>
        <li className="rounded-full text-sm bg-[#EDA8B3] px-4 py-2">
          {animal.animal.gender}
        </li>
        <li className="rounded-full text-sm bg-[#C5E59C] text-[#6B8B42] px-4 py-2">
          {animal.animal.age}
        </li>
        <li className="rounded-full text-sm bg-[#F1E689] text-[#978C2F] px-4 py-2">
          {animal.animal.breeds?.primary}
        </li>
      </ul>
      <p>{animal.animal.description}</p>
      <button className="bg-[#F2968F] text-white py-4 px-8 rounded-full">
        Adopter {animal.animal.name}
      </button>
    </section>
  );
};

export default Detailed;
