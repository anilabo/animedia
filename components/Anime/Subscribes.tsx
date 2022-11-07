import { BiListCheck } from "react-icons/bi";
import { ImEye } from "react-icons/im";
import { FaSearchPlus } from "react-icons/fa";
import axios from "axios";
import { firebase } from "lib/Firebase";

interface InitialProps {
  anime: Anime;
}

const AnimeSubscribes = ({ anime }: InitialProps) => {
  const createWatchLog = async (progress: string) => {
    const token = await firebase.auth().currentUser?.getIdToken();
    const params = {
      token,
      progress,
    };
    console.log(params);
    axios.post(
      `${process.env.NEXT_PUBLIC_ANILABO_URL}/animes/${anime.public_uid}/watch_logs`,
      params
    );
  };

  return (
    <>
      <div className="bg-gray-100 p-2">
        <p className="font-semibold text-sm text-gray-600">Subscribe</p>
      </div>
      <div className="p-4 flex md:flex-col gap-2">
        <button
          onClick={() => createWatchLog("watched")}
          className="border w-full px-2 py-1 hover:bg-green-500 hover:text-white text-sm text-gray-600 flex gap-2"
        >
          <div className="text-xl">
            <BiListCheck />
          </div>
          <p className="my-auto">Watched</p>
        </button>
        <button
          onClick={() => createWatchLog("watching")}
          className="border w-full px-2 py-1 hover:bg-green-500 hover:text-white text-sm text-gray-600 flex gap-2"
        >
          <div className="text-xl">
            <FaSearchPlus />
          </div>
          <p className="my-auto">Watching</p>
        </button>
        <button
          onClick={() => createWatchLog("will_watch")}
          className="border w-full px-2 py-1 hover:bg-green-500 hover:text-white text-sm text-gray-600 flex gap-2"
        >
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
