import UserFollowingCount from "../FollowingCount";
import UserProfileImage from "../ProfileImage";
import UserSubscribedAt from "../SubscribedAt";
import UserFollow from "../Follow";

interface InitialProps {
  user: User;
}

const UserFollowingsComponent = ({ user }: InitialProps) => (
  <div className="max-w-6xl m-2 md:mx-auto mb-10">
    <div className="grid md:grid-cols-3 gap-4 text-gray-600 ">
      <div className="flex flex-col gap-4">
        <UserProfileImage user={user} />
        <UserFollowingCount user={user} />
        <UserSubscribedAt user={user} />
      </div>
      <div className="md:col-span-2 flex flex-col gap-4">
        <UserFollow user={user} target_users={user.followings} />
      </div>
    </div>
  </div>
);

export default UserFollowingsComponent;
