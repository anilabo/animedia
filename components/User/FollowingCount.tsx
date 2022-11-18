import { useEffect, useState } from "react";

interface InitialProps {
  user: User;
}

const UserFollowingCount = ({ user }: InitialProps) => {
  const [followingCount, setFollowingCount] = useState<number>(
    user.followings.length
  );
  const [followerCount, setFollowerCount] = useState<number>(
    user.followers.length
  );

  useEffect(() => {
    setFollowingCount(user.followings.length);
    setFollowerCount(user.followers.length);
  }, [user]);

  return (
    <div className="rounded border grid grid-cols-2 text-sm divide-x">
      <p className="w-full py-2 m-auto text-center">
        <b className="font-semibold text-green-500 text-md">{followingCount}</b>{" "}
        Following
      </p>
      <p className="w-full py-2 m-auto text-center">
        <b className="font-semibold text-green-500 text-md">{followerCount}</b>{" "}
        Followed
      </p>
    </div>
  );
};

export default UserFollowingCount;
