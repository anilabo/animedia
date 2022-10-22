import { FaRegComment } from "react-icons/fa";

type InitialProps = { anime: Anime };

const AnimeMyCommentsLink = ({ anime }: InitialProps) => {
  return (
    <>
      <div className="bg-gray-100 p-2">
        <p className="font-semibold text-sm text-gray-600">My Comments</p>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <button className="border w-full px-2 py-1 hover:bg-green-600 hover:text-white text-sm text-gray-600 flex gap-2">
          <div className="text-xl">
            <FaRegComment />
          </div>
          <p className="my-auto">My comments list</p>
        </button>
      </div>
    </>
  );
};

export default AnimeMyCommentsLink;
