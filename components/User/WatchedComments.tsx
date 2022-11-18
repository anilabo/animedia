import Comment from "components/Anime/Comment";
import { useState } from "react";

interface InitialProps {
  user: User;
}

const UserWatchedComments = ({ user }: InitialProps) => {
  const [watchedAnimes, setWatchedAnimes] = useState<AnimeShortInfo[]>(user.watched_animes)

  return (
    <>
      <div className="rounded border flex flex-col">
        <div className="px-4 py-2 border-b">
          <p className="font-semibold">Comments & Reviews</p>
        </div>
        {user.watched_animes[0] ? (
          <>
            {user.watched_animes.map((anime) => (
              <Comment
                anime={anime}
                user={user}
                setWatchedObject={setWatchedAnimes}
                opinion={anime.opinion as string}
                finishedAt={anime.finished_at as string}
                visibleAnime={true}
                isSpoiler={anime.is_spoiler}
                key={anime.public_uid}
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

export default UserWatchedComments;
