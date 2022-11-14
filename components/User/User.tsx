import AnimeList from "components/Anime/List";
import Comment from "components/Anime/Comment";
import { useState } from "react";
import UserSubscribedAt from "./SubscribedAt";
import UserProfileImage from "./ProfileImage";
import UserFollowingCount from "./FollowingCount";

type InitialProps = { user: User };

const UserComponent = ({ user }: InitialProps) => {
  const [watchedUsers, setWatchedUsers] = useState<User[]>([]);

  return (
    <div className="max-w-6xl m-2 md:mx-auto mb-10">
      <div className="grid grid-cols-3 gap-4 text-gray-600 ">
        <div className="flex flex-col gap-4">
          <UserProfileImage user={user} />
          <UserFollowingCount user={user} />
          <UserSubscribedAt user={user} />
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
