import UserFollowingCount from "../FollowingCount";
import UserProfileImage from "../ProfileImage";
import UserSubscribedAt from "../SubscribedAt";
import UserFollow from "../Follow";

interface InitialProps {
  user: User;
}

const UserFollowersComponent = ({ user }: InitialProps) => (
  <div className="max-w-6xl m-2 md:mx-auto mb-10">
    <div className="grid md:grid-cols-3 gap-4 text-gray-600 ">
      <div className="flex flex-col gap-4">
        <UserProfileImage user={user} />
        <UserFollowingCount user={user} />
        <UserSubscribedAt user={user} />
      </div>
      <div className="md:col-span-2 flex flex-col gap-4">
        <UserFollow target="followers" target_users={user.followers} />
      </div>
    </div>
  </div>
);

export default UserFollowersComponent;
