import Image from "next/image";

interface InitialProps {
  user: User;
}

const UserProfileImage = ({ user }: InitialProps) => {
  return (
    <div className="rounded border p-4 flex flex-col gap-4 h-fit">
      <p className="mx-auto font-semibold text-xl">{user.display_name}</p>
      <div className="h-40 w-40 mx-auto">
        <Image
          src={user.photo_url}
          className="rounded"
          width={500}
          height={500}
        />
      </div>
      <button className="rounded border hover:bg-green-500 hover:text-white w-40 mx-auto py-1">
        フォロー
      </button>
    </div>
  );
};

export default UserProfileImage;
