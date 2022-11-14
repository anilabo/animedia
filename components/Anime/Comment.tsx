import Link from "next/link";
import Image from "next/image";
import { formatDate } from "utils/formatDate";
import { FaRegTrashAlt } from "react-icons/fa";
import { useCurrentUser } from "hooks/useCurrentUser";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";

type InitialProps = {
  anime: Anime | AnimeShortInfo;
  user: User;
  setWatchedUsers: Dispatch<SetStateAction<User[]>>;
  opinion: string;
  finishedAt: string;
  visibleAnime: boolean;
};

const Comment = ({
  anime,
  user,
  setWatchedUsers,
  opinion,
  finishedAt,
  visibleAnime,
}: InitialProps) => {
  const currentUser = useCurrentUser();

  const handleDelete = async () => {
    const token = await currentUser?.getIdToken();
    const params = { token };
    axios
      .delete(
        `${process.env.NEXT_PUBLIC_ANILABO_URL}/animes/${anime.public_uid}/watch_logs`,
        {
          params,
        }
      )
      .then((res) => {
        setWatchedUsers(res.data.watched_users);
      });
  };

  return (
    <>
      <div className="flex flex-col border-b p-4">
        <div className="flex gap-4">
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
            <div className="flex gap-2 mb-1">
              <Link href={`/users/${user.uid}`}>
                <a className="text-green-500 font-semibold hover:underline w-fit">
                  {user.display_name}
                </a>
              </Link>
              {visibleAnime && (
                <div className="text-xs text-gray-500 my-auto flex">
                  commented on &nbsp;
                  <p className="text-green-500">"</p>
                  <Link href={`/animes/${anime.public_uid}`}>
                    <a className="text-green-500 hover:underline font-medium">
                      {anime.title}
                    </a>
                  </Link>
                  <p className="text-green-500">"</p>
                </div>
              )}
            </div>
            <p className="text-gray-600">{opinion}</p>
            <div className="flex gap-2 text-gray-600 mt-1">
              <button className="border rounded px-4 py-1 text-xs hover:bg-green-500 hover:text-white">
                Nice!
              </button>
              <p className="text-xs mt-auto">☆1</p>
              <p className="text-xs mt-auto">comments(2)</p>
              <p className="text-gray-400 text-xs mt-auto">
                {finishedAt && formatDate(finishedAt)}
              </p>
            </div>
          </div>
          <div className="w-fit h-fit ml-auto">
            {currentUser?.uid == user.uid && (
              <button
                className="flex text-gray-600"
                onClick={() => handleDelete()}
              >
                <FaRegTrashAlt />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
