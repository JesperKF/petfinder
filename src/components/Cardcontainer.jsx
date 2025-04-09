import Animalcard from "./Animalcard";

const Cardcontainer = async () => {
  const data = await fetch("https://api.petfinder.com/v2/animals", {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    cache: "no-store",
  });
  const animals = await data.json();

  return <Animalcard data={animals} />;
};

export default Cardcontainer;
