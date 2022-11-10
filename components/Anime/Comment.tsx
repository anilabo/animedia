import Link from "next/link";
import Image from "next/image";
import { formatDate } from "utils/formatDate";

type InitialProps = { user: User };

const Comment = ({ user }: InitialProps) => {
  return (
    <>
      <div className="flex gap-4 p-4 border-b">
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
          <div className="flex gap-2 text-gray-600 mt-1">
            <button className="border rounded px-4 py-1 text-xs hover:bg-green-500 hover:text-white">Nice!</button>
            <p className="text-xs mt-auto">☆1</p>
            <p className="text-xs mt-auto">comments(2)</p>
            <p className="text-gray-400 text-xs mt-auto">
              {user.finished_at && formatDate(user.finished_at)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
