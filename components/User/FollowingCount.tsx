import Link from "next/link";
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
    <div className="rounded border grid grid-cols-2 text-sm divide-x shadow">
      <Link href={`/users/${user.uid}/followings`}>
        <a className="w-full py-2 m-auto text-center hover:bg-green-100">
          <b className="font-semibold text-green-500 text-md">
            {followingCount}
          </b>{" "}
          Following
        </a>
      </Link>
      <Link href={`/users/${user.uid}/followers`}>
        <a className="w-full py-2 m-auto text-center hover:bg-green-100">
          <b className="font-semibold text-green-500 text-md">
            {followerCount}
          </b>{" "}
          Follower
        </a>
      </Link>
    </div>
  );
};

export default UserFollowingCount;
