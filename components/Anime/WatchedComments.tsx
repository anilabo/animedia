import Link from "next/link";
import Comment from "components/Anime/Comment";
import { Dispatch, SetStateAction } from "react";

interface InitialProps {
  anime: Anime;
  watchedUsers: User[];
  setWatchedUsers: Dispatch<SetStateAction<User[]>>;
}

const AnimeWatchedComments = ({
  anime,
  watchedUsers,
  setWatchedUsers,
}: InitialProps) => {
  return (
    <>
      <div className="flex flex-col border rounded">
        <div className="text-gray-600 font-semibold px-4 py-2 border-b">
          Comments & Reviews
        </div>
        <div className="grid grid-cols-6 text-center text-gray-600 text-sm">
          <Link href={`/animes/${anime.public_uid}`}>
            <a className="my-auto py-1 border-r border-gray-300 bg-white">
              all
            </a>
          </Link>
          <Link href={`/animes/${anime.public_uid}#spoiler`}>
            <a className="my-auto py-1 border-r border-gray-300 bg-gray-100 border-b">
              spoiler
            </a>
          </Link>
          <Link href={`/animes/${anime.public_uid}#likes`}>
            <a className="my-auto py-1 border-r border-gray-300 bg-gray-100 border-b">
              likes
            </a>
          </Link>
          <div className="col-span-3 bg-gray-100 border-gray-300 border-b"></div>
        </div>
        {watchedUsers[0] ? (
          <>
            {watchedUsers.map((user) => (
              <Comment
                anime={anime}
                user={user}
                setWatchedUsers={setWatchedUsers}
                opinion={user.opinion as string}
                finishedAt={user.finished_at as string}
                visibleAnime={false}
                key={user.uid}
              />
            ))}
          </>
        ) : (
          <p className="text-gray-600 mx-auto py-8">There is no comments.</p>
        )}
      </div>
    </>
  );
};

export default AnimeWatchedComments;
