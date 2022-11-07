import { BiListCheck } from "react-icons/bi";
import { ImEye } from "react-icons/im";
import { FaSearchPlus } from "react-icons/fa";
import axios from "axios";
import { firebase } from "lib/Firebase";
import Modal from "react-modal";
import { Dispatch, SetStateAction, useState } from "react";
import { customStyles } from "lib/modalStyle";

interface InitialProps {
  anime: Anime;
  setWatchedUsers: Dispatch<SetStateAction<User[]>>;
}

const AnimeSubscribes = ({ anime, setWatchedUsers }: InitialProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [opinion, setOpinion] = useState<string>("");
  const [finishedAt, setFinishedAt] = useState("");
  const createWatchLog = async (progress: string) => {
    const token = await firebase.auth().currentUser?.getIdToken();
    const params = {
      token,
      progress,
      opinion,
      finished_at: finishedAt,
    };
    axios
      .post(
        `${process.env.NEXT_PUBLIC_ANILABO_URL}/animes/${anime.public_uid}/watch_logs`,
        params
      )
      .then((res) => {
        setIsModalOpen(false);
        setWatchedUsers(res.data.watched_users);
      });
  };

  return (
    <>
      <div className="bg-gray-100 p-2">
        <p className="font-semibold text-sm text-gray-600">Subscribe</p>
      </div>
      <div className="p-4 flex md:flex-col gap-2">
        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="border w-full px-2 py-1 hover:bg-green-500 hover:text-white text-sm text-gray-600 flex gap-2"
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
          <form onSubmit={() => createWatchLog("watched")}>
            <div className="grid grid-cols-4 gap-4">
              <p className="text-green-500 font-bold">{anime.title}</p>
              <p className="col-start-1 text-sm text-gray-600">watched day</p>
              <input
                type="date"
                className="col-span-3 rounded border-gray-400 text-gray-600"
                onChange={(e) => setFinishedAt(e.target.value)}
              />
              <p className="text-sm text-gray-600">Comment & Review</p>
              <textarea
                rows={5}
                className="col-span-3 rounded border-gray-400 text-gray-600"
                onChange={(e) => setOpinion(e.target.value)}
                placeholder="Type your comment."
              ></textarea>
              <button className="col-end-5 bg-green-500 rounded text-white py-1 hover:bg-green-600">
                Submit
              </button>
            </div>
          </form>
        </Modal>
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
