import { BiListCheck } from "react-icons/bi";
import { ImEye } from "react-icons/im";
import { FaSearchPlus } from "react-icons/fa";
import Modal from "react-modal";
import { Dispatch, SetStateAction, useState } from "react";
import { customStyles } from "utils/modalStyle";
import AnimeOpinionFormModal from "./OpinionFormModal";
import { useCreateWatchLog } from "hooks/useCreateWatchLog";
import { useCheckWatchLog } from "hooks/useCheckWatchLog";

interface InitialProps {
  anime: Anime;
  setWatchedUsers: Dispatch<SetStateAction<User[]>>;
}

const AnimeSubscribes = ({ anime, setWatchedUsers }: InitialProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="bg-gray-100 p-2">
        <p className="font-semibold text-sm text-gray-600">Subscribe</p>
      </div>
      <div className="p-4 flex md:flex-col gap-2">
        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className={`w-full px-2 py-1  text-sm  flex gap-2 ${
            useCheckWatchLog(anime) == "watched"
              ? "text-white bg-green-500"
              : "border text-gray-600 hover:text-white hover:bg-green-500"
          }`}
          disabled={useCheckWatchLog(anime) == "watched"}
        >
          <div className="text-xl">
            <BiListCheck />
          </div>
          <p className="my-auto">Watched</p>
        </button>
        <Modal
          isOpen={isModalOpen}
          style={customStyles}
          ariaHideApp={false}
          onRequestClose={() => setIsModalOpen(false)}
        >
          <AnimeOpinionFormModal
            anime={anime}
            setWatchedUsers={setWatchedUsers}
            setIsModalOpen={setIsModalOpen}
          />
        </Modal>
        <button
          onClick={() => useCreateWatchLog(anime, "watching", setWatchedUsers)}
          className={`w-full px-2 py-1 text-sm flex gap-2 ${
            useCheckWatchLog(anime) == "watching"
              ? "text-white bg-green-500 hover:bg-green-400"
              : "border text-gray-600 hover:bg-green-500 hover:text-white"
          }`}
        >
          <div className="text-xl">
            <FaSearchPlus />
          </div>
          <p className="my-auto">Watching</p>
        </button>
        <button
          onClick={() => useCreateWatchLog(anime, "will_watch", setWatchedUsers)}
          className={`w-full px-2 py-1 text-sm flex gap-2 ${
            useCheckWatchLog(anime) == "will_watch"
              ? "text-white bg-green-500 hover:bg-green-400"
              : "border text-gray-600 hover:bg-green-500 hover:text-white"
          }`}
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
