import { BiListCheck } from "react-icons/bi";
import { ImEye } from "react-icons/im";
import { FaSearchPlus } from "react-icons/fa";
import Modal from "react-modal";
import { Dispatch, SetStateAction, useState } from "react";
import { customStyles } from "utils/modalStyle";
import AnimeOpinionFormModal from "./OpinionFormModal";
import { useCreateWatchLog } from "hooks/useCreateWatchLog";
import { useEffect } from "react";
import { useCurrentUser } from "hooks/useCurrentUser";
import { useRouter } from "next/router";

interface InitialProps {
  anime: Anime;
  setWatchedUsers: Dispatch<SetStateAction<User[]>>;
}

const AnimeSubscribes = ({ anime, setWatchedUsers }: InitialProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const currentUser = useCurrentUser()
  const router = useRouter()
  const [watchingProgress, setWatchingProgress] = useState<AnimeWatchingProgressType | null>(null)

  useEffect(() => {
    if (anime.watched_users.filter((user) => user.uid == currentUser?.uid)[0]) {
      setWatchingProgress("watched");
    } else if (anime.watching_users.filter((user) => user.uid == currentUser?.uid)[0]) {
      setWatchingProgress("watching");
    } else if (anime.will_watch_users.filter((user) => user.uid == currentUser?.uid)[0]) {
      setWatchingProgress("will_watch");
    } else {
      setWatchingProgress(null)
    }
  }, [anime, currentUser]);

  return (
    <>
      <div className="bg-gray-100 p-2">
        <p className="font-semibold text-sm text-gray-600">Subscribe</p>
      </div>
      <div className="p-4 flex md:flex-col gap-2">
        <button
          onClick={() => currentUser ? setIsModalOpen(!isModalOpen) : router.push('/signup')}
          className={`w-full px-2 py-1  text-sm  flex gap-2 ${
            watchingProgress == "watched"
              ? "text-white bg-green-500"
              : "border text-gray-600 hover:text-white hover:bg-green-500"
          }`}
          disabled={watchingProgress == "watched"}
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
            setWatchingProgress={setWatchingProgress}
            setIsModalOpen={setIsModalOpen}
          />
        </Modal>
        <button
          onClick={() => currentUser ? useCreateWatchLog(anime, "watching", setWatchedUsers, setWatchingProgress) : router.push('/signup') }
          className={`w-full px-2 py-1 text-sm flex gap-2 ${
            watchingProgress == "watching"
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
          onClick={() => currentUser ? useCreateWatchLog(anime, "will_watch", setWatchedUsers, setWatchingProgress) : router.push('/signup')}
          className={`w-full px-2 py-1 text-sm flex gap-2 ${
            watchingProgress == "will_watch"
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
