import Link from "next/link";
import Comment from "components/Anime/Comment";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const { visible_level } = router.query;

  return (
    <>
      <div className="flex flex-col border rounded">
        <div className="text-gray-600 font-semibold px-4 py-2 border-b">
          Comments & Reviews
        </div>
        <div className="grid grid-cols-6 text-center text-gray-600 text-sm">
          <Link href={`/animes/${anime.public_uid}`}>
            <a className={`my-auto py-1 border-r border-gray-300  ${
              !!visible_level ? "bg-gray-100 border-b": "bg-white"
            }`}>
              all
            </a>
          </Link>
          <Link href={`/animes/${anime.public_uid}?visible_level=only_spoiler`}>
            <a
              className={`my-auto py-1 border-r border-gray-300  ${
                visible_level != "only_spoiler" ? "bg-gray-100 border-b" : "bg-white"
              }`}
            >
              spoiler
            </a>
          </Link>
          <div className="col-span-4 bg-gray-100 border-gray-300 border-b"></div>
        </div>
        {watchedUsers[0] ? (
          <>
            {watchedUsers.map((user) => (
              <Comment
                anime={anime}
                user={user}
                setWatchedObject={setWatchedUsers}
                opinion={user.opinion as string}
                finishedAt={user.finished_at as string}
                visibleAnime={false}
                isSpoiler={user.is_spoiler}
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
