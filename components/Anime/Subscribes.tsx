import { BiListCheck } from "react-icons/bi";
import { ImEye } from "react-icons/im";
import { FaSearchPlus } from "react-icons/fa";

interface InitialProps {
  anime: Anime;
}

const AnimeSubscribes = ({ anime }: InitialProps) => {
  return (
    <>
      <div className="bg-gray-100 p-2">
        <p className="font-semibold text-sm text-gray-600">Subscribe</p>
      </div>
      <div className="p-4 flex md:flex-col gap-2">
        <button className="border w-full px-2 py-1 hover:bg-green-500 hover:text-white text-sm text-gray-600 flex gap-2">
          <div className="text-xl">
            <BiListCheck />
          </div>
          <p className="my-auto">Watched</p>
        </button>
        <button className="border w-full px-2 py-1 hover:bg-green-500 hover:text-white text-sm text-gray-600 flex gap-2">
          <div className="text-xl">
            <FaSearchPlus />
          </div>
          <p className="my-auto">Watching</p>
        </button>
        <button className="border w-full px-2 py-1 hover:bg-green-500 hover:text-white text-sm text-gray-600 flex gap-2">
          <div className="text-xl">
            <ImEye />
          </div>
          <p className="my-auto">Watch later</p>
        </button>
      </div>
    </>
  );
};

export default AnimeSubscribes;
