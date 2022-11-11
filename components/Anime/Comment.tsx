import Link from "next/link";
import Image from "next/image";
import { formatDate } from "utils/formatDate";
import { FaRegTrashAlt } from "react-icons/fa";
import { useCurrentUser } from "hooks/useCurrentUser";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";

type InitialProps = { anime: Anime; user: User, setWatchedUsers: Dispatch<SetStateAction<User[]>> };

const Comment = ({ anime, user, setWatchedUsers }: InitialProps) => {
  const currentUser = useCurrentUser();

  const handleDelete = async () => {
    const token = await currentUser?.getIdToken();
    const params = { token };
    axios.delete(`${process.env.NEXT_PUBLIC_ANILABO_URL}/animes/${anime.public_uid}/watch_logs`, {
      params
    }).then((res) => {
      setWatchedUsers(res.data.watched_users)
    });
  };

  return (
    <>
      <div className="flex gap-4 p-4 border-b">
        <Link href={`/users/${user.uid}`}>
          <a className="w-12 h-12">
            <Image
              width={500}
              height={500}
              src={user.photo_url}
              className="rounded"
            />
          </a>
        </Link>
        <div className="flex flex-col text-sm">
          <Link href={`/users/${user.uid}`}>
            <a className="text-green-500 font-semibold hover:underline w-fit">
              {user.display_name}
            </a>
          </Link>
          <p className="text-gray-600">{user.opinion}</p>
          <div className="flex gap-2 text-gray-600 mt-1">
            <button className="border rounded px-4 py-1 text-xs hover:bg-green-500 hover:text-white">
              Nice!
            </button>
            <p className="text-xs mt-auto">☆1</p>
            <p className="text-xs mt-auto">comments(2)</p>
            <p className="text-gray-400 text-xs mt-auto">
              {user.finished_at && formatDate(user.finished_at)}
            </p>
          </div>
        </div>
        <div className="w-fit h-fit ml-auto">
          {currentUser?.uid == user.uid && (
            <button className="flex text-gray-600" onClick={() => handleDelete()}>
              <FaRegTrashAlt />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Comment;
