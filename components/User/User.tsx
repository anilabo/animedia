import AnimeList from "components/Anime/List";
import Image from "next/image";
import Comment from "components/Anime/Comment";
import { useState } from "react";
import { formatDate } from "utils/formatDate";

type InitialProps = { user: User };

const UserComponent = ({ user }: InitialProps) => {
  const [watchedUsers, setWatchedUsers] = useState<User[]>([]);

  return (
    <div className="max-w-6xl m-2 md:mx-auto mb-10">
      <div className="grid grid-cols-3 gap-4 text-gray-600 ">
        <div className="flex flex-col gap-4">
          <div className="rounded border p-4 flex flex-col gap-4 h-fit">
            <p className="mx-auto font-semibold text-xl">{user.display_name}</p>
            <div className="h-40 w-40 mx-auto">
              <Image
                src={user.photo_url}
                className="rounded"
                width={500}
                height={500}
              />
            </div>
            <button className="rounded border hover:bg-green-500 hover:text-white w-40 mx-auto py-1">
              フォロー
            </button>
          </div>
          <div className="rounded border grid grid-cols-2 text-sm divide-x">
            <p className="w-full py-2 m-auto text-center">
              <b className="font-semibold text-green-500 text-md">9</b>{" "}
              Following
            </p>
            <p className="w-full py-2 m-auto text-center">
              <b className="font-semibold text-green-500 text-md">10</b>{" "}
              Followed
            </p>
          </div>
          <div className="text-gray-600 text-sm grid grid-cols-3">
            <div className="bg-gray-100 border-y border-l rounded-l w-full px-4 py-2 mx-auto">
              Subscribed at
            </div>
            <div className="col-span-2 border-y border-r w-full h-full rounded-r flex">
              <p className="m-auto text-green-500">
                {formatDate(user.created_at)}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-4">
          <div className="rounded border">
            {user.watched_animes.map((anime) => (
              <Comment
                anime={anime}
                user={user}
                setWatchedUsers={setWatchedUsers}
                opinion={anime.opinion as string}
                finishedAt={anime.finished_at as string}
                visibleAnime={true}
                key={anime.public_uid}
              />
            ))}
          </div>
          <AnimeList animes={user.watched_animes} progress="watched" />
          <AnimeList animes={user.watching_animes} progress="watching" />
          <AnimeList animes={user.will_watch_animes} progress="will_watch" />
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
