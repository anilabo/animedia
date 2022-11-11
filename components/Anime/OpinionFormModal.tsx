import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useCreateWatchLog } from "hooks/useCreateWatchLog";

type InitialProps = {
  anime: Anime;
  setWatchedUsers: Dispatch<SetStateAction<User[]>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setWatchingProgress: Dispatch<SetStateAction<AnimeWatchingProgressType | null>>;
};

const AnimeOpinionFormModal = ({ anime, setWatchedUsers, setIsModalOpen, setWatchingProgress }: InitialProps) => {
  const [opinion, setOpinion] = useState<string>("");
  const [finishedAt, setFinishedAt] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    useCreateWatchLog(anime, "watched", setWatchedUsers, setWatchingProgress, e, opinion, finishedAt).then(() => {
      setIsModalOpen(false)
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="grid grid-cols-4 gap-4">
        <p className="text-green-500 font-bold col-span-4">{anime.title}</p>
        <p className="col-start-1 text-sm text-gray-600">watched day</p>
        <input
          type="date"
          className="col-span-3 rounded border-gray-400 text-gray-600"
          onChange={(e) => setFinishedAt(e.target.value)}
          required
        />
        <p className="text-sm text-gray-600">Comment & Review</p>
        <textarea
          rows={5}
          className="col-span-3 rounded border-gray-400 text-gray-600"
          onChange={(e) => setOpinion(e.target.value)}
          placeholder="Type your comment."
          required
        ></textarea>
        <button className="col-end-5 bg-green-500 rounded text-white py-1 hover:bg-green-600">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AnimeOpinionFormModal;
