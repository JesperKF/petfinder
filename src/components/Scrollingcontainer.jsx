import Button from "./Button";
import AllImg from "../buttonimg/All.png";
import DogsImg from "../buttonimg/Dogs.png";
import CatsImg from "../buttonimg/Cats.png";

const Scrollingcontainer = () => {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap gap-2 p-4 max-w-full mb-5 scrollbar-hide">
      <Button
        text="Alle"
        src={AllImg}
        alt="alle"
      />
      <Button
        text="Hunde"
        src={DogsImg}
        alt="hunde"
      />
      <Button
        text="Katte"
        src={CatsImg}
        alt="katte"
      />
      <Button
        text="Andet"
        src={AllImg}
        alt="andet"
      />
    </div>
  );
};

export default Scrollingcontainer;

// flex overflow-x-scroll p-4 mb-5 space-x-4 scrollbar-hide
