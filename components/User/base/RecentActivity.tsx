
import UserFollowingCount from "../FollowingCount";
import UserProfileImage from "../ProfileImage";
import UserSubscribedAt from "../SubscribedAt";
import UserActivityLists from "../ActivityLists";

type InitialProps = { user: User; };

const UserRecentActivityComponent = ({ user }: InitialProps) => (
  <>
    <div className="max-w-6xl m-2 md:mx-auto mb-10">
      <div className="grid md:grid-cols-3 gap-4 text-gray-600 ">
        <div className="flex flex-col gap-4">
          {/* 変えたい */}
          <UserProfileImage user={user} />
          <UserFollowingCount user={user} />
          <UserSubscribedAt user={user} />
        </div>
        <div className="md:col-span-2 flex flex-col gap-4">
          <UserActivityLists headline={'Recent Activities'} lists={user.active_notifications} />
        </div>
      </div>
    </div>
  </>
);

export default UserRecentActivityComponent;
