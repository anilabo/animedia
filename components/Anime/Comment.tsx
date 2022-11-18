import Link from "next/link";
import Image from "next/image";
import { formatDate } from "utils/formatDate";
import { FaRegTrashAlt } from "react-icons/fa";
import { useCurrentUser } from "hooks/useCurrentUser";
import axios from "axios";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { useRouter } from "next/router";

type InitialProps = {
  anime: Anime | AnimeShortInfo;
  user: User;
  setWatchedObject: Dispatch<SetStateAction<User[]>> | Dispatch<SetStateAction<AnimeShortInfo[]>>;
  opinion: string;
  finishedAt: string;
  visibleAnime: boolean;
  isSpoiler?: boolean;
};

const Comment = ({
  anime,
  user,
  setWatchedObject,
  opinion,
  finishedAt,
  visibleAnime,
  isSpoiler,
}: InitialProps) => {
  const currentUser = useCurrentUser();
  const router = useRouter();
  const { visible_level } = router.query;
  const [evasiveness, setEvasiveness] = useState<boolean>(!!isSpoiler && visible_level != "only_spoiler");

  useEffect(()=> {
    setEvasiveness(!!isSpoiler && visible_level != "only_spoiler")
  }, [anime])

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
        location.reload() // 強制リロード
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
              {isSpoiler && (
                <div className="bg-red-500 rounded flex ml-2">
                  <p className="text-xs my-auto text-white px-2">SPOILER</p>
                </div>
              )}
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
            <p
              className={`${
                evasiveness
                  ? "text-gray-100 hover:text-gray-600 "
                  : "text-gray-600"
              }`}
            >
              {opinion}
            </p>
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
