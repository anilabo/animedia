import AnimeList from "components/Anime/List";
import UserSubscribedAt from "./SubscribedAt";
import UserProfileImage from "./ProfileImage";
import UserFollowingCount from "./FollowingCount";
import UserWatchedComments from "./WatchedComments";
import UserIntroduction from "./Introduction";

type InitialProps = { user: User };

const UserComponent = ({ user }: InitialProps) => {
  return (
    <div className="max-w-6xl m-2 md:mx-auto mb-10">
      <div className="grid md:grid-cols-3 gap-4 text-gray-600 ">
        <div className="flex flex-col gap-4">
          <UserProfileImage user={user} />
          <UserFollowingCount user={user} />
          <UserSubscribedAt user={user} />
          <UserIntroduction user={user} />
        </div>
        <div className="md:col-span-2 flex flex-col gap-4">
          <UserWatchedComments user={user} limit={6} />
          <AnimeList animes={user.watched_animes} progress="watched" user={user} limit={10} />
          <AnimeList animes={user.watching_animes} progress="watching" user={user} limit={10} />
          <AnimeList animes={user.will_watch_animes} progress="will_watch" user={user} limit={10} />
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
