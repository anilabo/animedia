import axios from "axios";
import { useCurrentUser } from "hooks/useCurrentUser";
import Image from "next/image";
import { useEffect, useState } from "react";

interface InitialProps {
  user: User;
}

const UserProfileImage = ({ user }: InitialProps) => {
  const currentUser = useCurrentUser();
  const [isFollowing, setIsFollowings] = useState<boolean>(false);
  const [visibleFollowButton, setVisibleFollowButton] = useState<boolean>(false)
  const follow = async () => {
    const token = await currentUser?.getIdToken();
    const params = {
      token,
      user_uid: user.uid,
    };
    axios
      .post(`${process.env.NEXT_PUBLIC_ANILABO_URL}/relationships`, params)
      .then(() => setIsFollowings(true));
  };
  const unfollow = async () => {
    const token = await currentUser?.getIdToken();
    const params = {
      token,
      user_uid: user.uid,
    };
    axios
      .delete(`${process.env.NEXT_PUBLIC_ANILABO_URL}/relationships`, {
        params,
      })
      .then(() => setIsFollowings(false));
  };

  useEffect(() => {
    setIsFollowings(
      !!user.followers.filter((user) => user.uid == currentUser?.uid)[0]
    );
    setVisibleFollowButton(!!currentUser && currentUser.uid != user.uid)
  }, [currentUser, user]);

  return (
    <div className="rounded border p-4 flex flex-col gap-4 h-fit shadow">
      <p className="mx-auto font-semibold text-xl">{user.display_name}</p>
      <div className="h-40 w-40 mx-auto">
        <Image
          src={user.photo_url}
          className="rounded"
          width={500}
          height={500}
        />
      </div>
      {visibleFollowButton && (
        <>
          {isFollowing ? (
            <button
              className="rounded border bg-green-500 text-white w-40 hover:bg-green-600 mx-auto py-1"
              onClick={() => unfollow()}
            >
              unfollow
            </button>
          ) : (
            <button
              className="rounded border hover:bg-green-500 hover:text-white w-40 mx-auto py-1"
              onClick={() => follow()}
            >
              follow
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default UserProfileImage;
