"use client";

const Animalcard = ({ data }) => {
  console.log("data: ", data);
  return (
    <ul className="grid grid-cols-2 gap-4 p-4">
      {data.animals.map((animal) => (
        <li
          className="bg-white rounded-2xl shadow-md overflow-hidden"
          key={animal.id}
        >
          <div className="p-3">
            <div className="flex justify-between items-center mb-1">
              <h2 className="font-semibold text-md">{animal.name}</h2>
              <span className="text-gray-400 text-sm">{animal.age}</span>
            </div>
            <p className="text-gray-400 text-sm">{animal.breeds?.primary}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Animalcard;
