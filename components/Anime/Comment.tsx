import Link from "next/link";
import Image from "next/image";

type InitialProps = { user: User };

const Comment = ({ user }: InitialProps) => {
  return (
    <>
      <div className="flex gap-4 p-4" key={user.uid}>
        <Link href={`/users/${user.uid}`}>
          <a className="w-12 h-12">
            <Image
              width={500}
              height={500}
              src={user.photo_url}
              className="rounded"
            />
          </a>
        </Link>
        <div className="flex flex-col text-sm">
          <Link href={`/users/${user.uid}`}>
            <a className="text-green-500 font-semibold hover:underline w-fit">
              {user.display_name}
            </a>
          </Link>
          <p className="text-gray-600">{user.opinion}</p>
        </div>
      </div>
    </>
  );
};

export default Comment;
