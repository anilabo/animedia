import UserFollowingCount from "../FollowingCount";
import UserProfileImage from "../ProfileImage";
import UserSubscribedAt from "../SubscribedAt";
import AnimeList from "components/Anime/List";

interface InitialProps {
  user: User;
}

const UserWatchingAllAnimesComponent = ({ user }: InitialProps) => (
  <div className="max-w-6xl m-2 md:mx-auto mb-10">
    <div className="grid md:grid-cols-3 gap-4 text-gray-600 ">
      <div className="flex flex-col gap-4">
        <UserProfileImage user={user} />
        <UserFollowingCount user={user} />
        <UserSubscribedAt user={user} />
      </div>
      <div className="md:col-span-2 flex flex-col gap-4">
        <AnimeList
          animes={user.watching_animes}
          progress="watching"
          limit={user.watching_animes.length}
          user={user} />
      </div>
    </div>
  </div>
);

export default UserWatchingAllAnimesComponent;
