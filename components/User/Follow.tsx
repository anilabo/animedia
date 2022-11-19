import Image from "next/image";
import Link from "next/link";

type InitialProps = { target: "followers" | "followings"; target_users: UserShortInfo[] };

const UserFollow = ({ target, target_users }: InitialProps) => {
  return (
    <div className="border rounded flex flex-col">
      <div className="border-b flex gap-2 px-4 py-2">
        <p className="text-gray-600 font-semibold">{ target }</p>
        <p className="my-auto text-white bg-green-500 h-fit w-fit px-2 rounded-full">
          {target_users.length}
        </p>
      </div>
      { target_users[0] ? (
        <>
        {target_users.map((follower, index) => (
        <div key={follower.uid}>
          <Link href={`/users/${follower.uid}`}>
            <a className="flex gap-2 hover:bg-green-100">
              <div className="h-10 w-10 m-2">
                <Image
                  src={follower.photo_url}
                  width={400}
                  height={400}
                  className="rounded-full"
                />
              </div>
              <p className="text-green-500 font-semibold my-auto">
                {follower.display_name}
              </p>
            </a>
          </Link>
          {target_users.length != index + 1 && <hr />}
        </div>
      ))}
        </>
      ) :(
        <p className="text-gray-400 mx-auto py-2">There are no users.</p>
      )}
      
    </div>
  );
};

export default UserFollow;
